---
title: "Do Modern LLC Replacement Policies Generalize to Modern Workloads?"
tagline: "Research evaluating cache replacement policies across SPEC06, SPEC17, GWT, and Ligra"
stack: ["ChampSim", "Python", "C++", "LaTeX"]
role: "Co-authored with Luciano Galvani"
date: 2026-03-01
featured: true
writeupUrl: "https://your-domain.com/papers/llc-replacement-policies.pdf"
order: 2
---

A benchmark sweep of last-level cache replacement policies (LRU, Hawkeye, Mockingjay,
and others) across SPEC06, SPEC17, GWT, and Ligra workloads, built on a custom
automation and plotting pipeline plus an instrumented Hawkeye build for measuring
predictor false-positive rates.

## Key finding

OPTgen-based policies (Hawkeye, Mockingjay) measurably hurt performance on GWT —
traced back to structurally high PC entropy and a branch-bound rather than
memory-bound workload character, which breaks the assumptions those policies
are built on.

## Notes

Also involved porting Mockingjay to ChampSim's modern class-based API, debugging a
fill-hook issue in the process, and discovering that earlier parameter sweeps had
silently produced identical binaries due to stale `.csconfig/` build caches — a
finding that reshaped how later sweeps in this project (and in Aster) were run.
