---
title: "Aster"
tagline: "A validated, event driven cache simulator written in Rust"
stack: ["Rust"]
date: 2026-06-01
featured: true
githubUrl: "https://github.com/aj-008/aster"
order: 1
---

Aster is a cache hierarchy simulator I'm building in Rust to explore memory-system design. It reads ChampSim-format memory traces and models a configurable cache hierarchy via TOML-based configuration. LIST MEASURED STATS HERE

## Highlights

- Configurable eviction policies and prefetcher
- Validated correctness directly against ChampSim reference output
- Models writeback propagation between cache levels
- Claude Code subagent reviews code 

## Project Photos
![Miss rate vs LLC size across policies](/projects/aster/test_results.png)
