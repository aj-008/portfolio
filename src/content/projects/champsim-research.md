---
title: "Do Modern LLC Replacement Policies Generalize to Modern Workloads?"
tagline: "Research evaluating cache replacement policies across SPEC06, SPEC17, GWT, and Ligra"
stack: ["ChampSim", "Python", "Bash", "C++", "LaTeX"]
role: "Co-authored with Luciano Galvani"
date: 2026-03-01
featured: true
writeupUrl: "/projects/research/report.pdf"
order: 2
---

A benchmark sweep of last-level cache replacement policies (LRU, Hawkeye, Mockingjay,
and others) across SPEC06, SPEC17, and GWT workloads, built on a custom
automation and plotting pipeline plus an instrumented Hawkeye build for measuring
predictor false-positive rates.

## Key finding

OPTgen-based policies (Hawkeye, Mockingjay) measurably hurt performance on GWT —
traced back to structurally high PC entropy and a branch-bound rather than
memory-bound workload character, which breaks the assumptions those policies
are built on.

## Notes

Also involved porting Mockingjay, Hawkeye to ChampSim's modern class-based API
