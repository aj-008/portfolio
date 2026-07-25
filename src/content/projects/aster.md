---
title: "Aster"
tagline: "A Rust cache simulator implementing SRRIP, DRRIP, and other LLC replacement policies"
stack: ["Rust", "ChampSim traces", "TOML config", "thiserror"]
role: "Solo"
date: 2026-06-01
featured: true
githubUrl: "https://github.com/your-username/aster"
order: 1
---

Aster is a from-scratch cache replacement policy simulator built to validate and extend
findings from ChampSim-based research. It reads real trace formats through a `TraceSource`
trait (with a `ChampSimReader` implementation) and evaluates policies against a
TOML-based per-policy configuration system.

## Highlights

- Implemented a `thiserror`-based error hierarchy for clean, typed failure handling
- Validated LRU and SRRIP correctness directly against ChampSim reference output
- Found and diagnosed a fill-hook wiring bug in ChampSim's `cache.h` that silently
  drops fill callbacks for update-only replacement modules — a bug that had quietly
  invalidated prior DRRIP/SHiP/Mockingjay parameter sweeps
- Set up a Claude Code subagent for automated code review on every change

## Why it matters

Cache replacement policy research leans heavily on simulator correctness. This project
is as much about building confidence in the underlying tooling as it is about the
policies themselves — the fill-hook bug in particular is a good example of why
validating a simulator against reference output isn't optional.
