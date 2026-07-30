---
title: "Digicam"
tagline: "A bare-metal digital camera on an STM32L432KC — capture, JPEG decode, display, and SD storage in 64 KB of SRAM"
stack: ["C", "STM32L432KC", "PlatformIO", "OV2640", "ST7789", "FatFs", "TJpgDec"]
role: "Team of 4 — EE14 final project"
date: 2026-05-05
featured: true
githubUrl: "https://github.com/aj-008/digital_camera_ee14"
order: 2
thumbnail: "/projects/digicam/thumb.png"
---

A working digital camera built on a Nucleo-L432KC: press a button, the OV2640
sensor captures a JPEG, the microcontroller decodes it, paints it on a 240×320
ST7789 panel, and writes it to an SD card. A second mode reads the card back and
pages through the photos.

Everything below the application talks to hardware directly — SPI, I²C, GPIO, and
the clock tree are configured by writing registers.

Built with Jack Geraghty, Andrew Schretzmayer, and Taiyr Ashkenov for EE14 at
Tufts. My work was the SPI and I²C layers, the OV2640 bring-up, 
and the colour-format and orientation fixes described below.

Video of the working device can be found on the
[GitHub page](https://github.com/aj-008/digital_camera_ee14).

## Two SPI buses

The obvious wiring is a single SPI bus with three chip selects for camera, display,
and SD card. We built that first, and it was unreliable: transactions to one device
would corrupt another's state, and no data could move through the whole pipeline.

The camera and display were kept on SPI1; the SD card
moved to SPI3. Two peripherals cost more GPIO and a second
initialisation path, and they guarantee that a filesystem write can't
be interleaved with a display refresh.

## Colour format and the byte swap

TJpgDec emits RGB565 pixels; the ST7789 expects RGB565 with the opposite byte
order. Every decoded block therefore gets swapped in the decoder's output
callback before it reaches the panel:

```c
for (uint32_t i = 0; i < npix; i++) {
    uint16_t v = px[i];
    px[i] = (v << 8) | (v >> 8);
}
```

## Memory budget

The L432KC has 64 KB of SRAM, and the two buffers that matter are a 12 KB JPEG
staging buffer and an 8 KB TJpgDec working buffer.

We decided to fix the camera at 320×240 JPEG rather than the OV2640's
full 2 MP. `load_fifo` reads the sensor's FIFO length first and refuses the frame
if it won't fit, rather than overrunning the buffer:

```c
uint32_t length = camera_fifo_length();
if (length == 0 || length > sizeof(jpeg_buf) - 4) return -1;
```

Decoding streams through TJpgDec block-by-block straight to the display, so a
full framebuffer never has to exist in memory.

## Working around the FIFO

Capture is wrapped in a retry loop: a FIFO read that doesn't produce a valid JPEG
header triggers a recapture instead of handing a corrupt frame to the decoder. A
missing SD card is likewise non-fatal; the camera boots, reports `NO SD`, and
still captures and previews.


## Credit to Outside Works

FatFs and TJpgDec are ChaN's, the SD block driver is ST's Adafruit-shield BSP,
and the ST7789 driver started from Floyd-Fish's and was adapted. Written for this
project: the SPI1/SPI3 drivers, the I²C layer and OV2640 register bring-up, the
ArduCAM FIFO protocol, the clock configuration, the 5×7 bitmap font and UI
drawing, and the application state machine.

## Limitations

- **No DMA.** Every SPI transfer is a polled loop at roughly
  2.5 MHz, so the CPU blocks for the entire duration of a frame read and a
  display paint.
- **Fixed at 320×240.** Larger captures are a buffer-size and display problem, not a sensor
  limitation.
- **The library caps at 64 photos** and pages are forward only
