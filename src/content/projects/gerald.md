---
title: "Gerald"
tagline: "A self-hosted media server on a repurposed HP thin client"
stack: ["Arch Linux", "Docker", "Jellyfin", "Navidrome", "Caddy", "Tailscale"]
role: "Solo"
date: 2025-11-01
featured: false
order: 4
---

A full self-hosted media stack running on a repurposed HP thin client: Jellyfin and
Navidrome behind Caddy, exposed securely over Tailscale HTTPS with a systemd boot
service for reliability, plus Syncthing for keeping the music library in sync from a
laptop.

## Highlights

- Diagnosed and resolved Docker/containerd storage corruption issues
- Resolved a port conflict between `tailscale serve` and Caddy
- Designed a storage layout splitting a 16GB SSD root from a 256GB HDD `/home`
- Set up Tailscale device sharing so a friend could access the server remotely

## Why it's here

Most of my other projects are research or application code — this one is systems and
infrastructure work: the kind of debugging that doesn't show up in a GitHub commit
graph but matters just as much.
