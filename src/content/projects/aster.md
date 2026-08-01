---
title: Aster
tagline: A trace-driven cache hierarchy simulator in Rust
stack: ["Rust", "Computer Architecture", "ChampSim"]
githubUrl: "https://github.com/aj-008/aster"
date: 2026-06-01
featured: true
---

Aster is a trace-driven cache hierarchy simulator I wrote in Rust to test
replacement-policy and prefetcher ideas outside the constraints of ChampSim's
C++ codebase. It reads ChampSim-format memory traces and models a full
L1I / L1D / L2 / LLC hierarchy including dirty bits, writeback propagation, and
per-level geometry with the replacement policy and prefetcher selected from a
TOML config.

## Replacement Policy and Prefetcher Implementation
All replacement policies and prefetchers are exposed as trait implementations,
making adding new configurations plug and play. Specific policy settings are
exposed through the TOML configuration file. 

## A PC-keyed Stream-buffer Prefetcher

Beyond the cache itself, Aster models a stream-buffer prefetcher keyed on PC,
with configurable degree and stream count, so prefetching and replacement can be
measured together rather than in isolation.

## Validation

Aster is validated against ChampSim on identical traces and geometry, matching
its demand-miss stream to within 0.02% at every cache level across a streaming
scan (libquantum) and a pointer-chasing workload that thrashes the LLC (mcf).
Full methodology and the per-level comparison are in the [README](https://github.com/aj-008/aster).

## What It Doesn't Do

Aster has no timing model, so it measures miss behavior rather than cycles or IPC;
single-core and single-thread; no MSHRs, so it doesn't capture miss-level
parallelism or merging. Two replacement policies (LRU, SRRIP) and one prefetcher
are implemented so far, with DRRIP and SHiP on the roadmap.


## Sample Output

```bash
=== Aster Simulator ===
trace:        traces/429.mcf-217B.champsimtrace.trace.gz
warmup insts: 1000000
sim insts:    20000000
--- cache config ---
  L1I   block_size=64    cache_size=32768    assoc=4   policy=srrip      prefetcher=none
----------------------------
  L1D   block_size=64    cache_size=32768    assoc=8   policy=srrip      prefetcher=none
----------------------------
  L2    block_size=64    cache_size=524288   assoc=8   policy=srrip      prefetcher=stream_buffer
        prefetch_settings: degree=4, num_streams=10
----------------------------
  LLC   block_size=64    cache_size=2097152  assoc=16  policy=srrip      prefetcher=none
        repl_settings: increment=3, insertion_rrpv=1, max_rrpv=8
----------------------------
heartbeat:   21000000/21000000   insts (100.0%)  elapsed=  13.0s
=== Results ===
wall time: 13.01s
Instructions simulated: 20000000
L1I:   hits=19999999   misses=1          hit_rate=100.0%  MPKI=0.00 writebacks=0 writebacks_received=0 prefetch_hits=0 prefetch_unused=0
                 prefetch_issued=0 prefetch_redundant=0
L1D:   hits=8622098    misses=1327273    hit_rate=86.7%  MPKI=66.36 writebacks=37373 writebacks_received=0 prefetch_hits=0 prefetch_unused=0
                 prefetch_issued=0 prefetch_redundant=0
L2:    hits=784118     misses=543156     hit_rate=59.1%  MPKI=27.16 writebacks=30358 writebacks_received=37373 prefetch_hits=775159 prefetch_unused=204
                 prefetch_issued=775363 prefetch_redundant=2320909
LLC:   hits=1350       misses=541806     hit_rate=0.2%  MPKI=27.09 writebacks=29543 writebacks_received=30358 prefetch_hits=0 prefetch_unused=759653
                 prefetch_issued=0 prefetch_redundant=0
```
