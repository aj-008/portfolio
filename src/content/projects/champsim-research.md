---
title: "Do Modern LLC Replacement Policies Generalize to Modern Workloads?"
tagline: "Research evaluating modern cache replacement policies in ChampSim"
stack: ["ChampSim", "C++", "Python", "Bash", "LaTeX"]
role: "Co-authored with Luciano Galvani"
date: 2026-03-01
featured: true
writeupUrl: "/projects/research/report.pdf"
order: 2
---

Modern cache replacement policies such as Hawkeye and Mockingjay have demonstrated strong results on traditional benchmark suites, but their performance on newer workloads is less understood. This project evaluates seven replacement policies across SPEC CPU2006, SPEC CPU2017, and Google Workload Tests (GWT) using a custom ChampSim evaluation framework, automated benchmarking pipeline, and analysis tooling.

---

## Research at a Glance

| | |
|---|---|
| **Question** | Do modern LLC replacement policies continue to outperform LRU on contemporary workloads? |
| **Benchmarks** | SPEC CPU2006, SPEC CPU2017, GWT |
| **Simulator** | ChampSim |
| **Policies Evaluated** | LRU, Hawkeye, Mockingjay, SHiP, SRRIP, DRRIP |

---

## My Contributions

- Built an automated benchmarking pipeline for large-scale ChampSim experiments
- Ported Hawkeye and Mockingjay to ChampSim's modern class-based API
- Instrumented Hawkeye to measure predictor false-positive rates
- Developed Python scripts for parsing simulation results and generating publication-quality figures
- Co-authored the final paper and analysis

---

## Key Results

> We find that the traditional policies which outperform
LRU on the classic SPEC benchmark suites, and their variants,
fail to generalize to the Google Workload Traces, where the
same policies degrade IPC by up to 14% at a 2MiB LLC and
converge toward LRU performance as LLC size grows. These
results show that the SPEC suite is a poor indicator for eval-
uating replacement policies in the modern server and cloud
computing contexts and suggest that new cache replacement
paradigms may be necessary to adapt to the contemporary
environment.

### Highlights

- Introduced **PC entropy** as a workload characterization metric, showing that modern data center workloads exhibit significantly higher PC diversity than SPEC benchmarks, reducing the effectiveness of PC-based replacement predictors.

- Demonstrated that replacement policies which consistently outperform LRU on SPEC CPU often fail to generalize to modern Google Workload Traces, with most policies degrading performance on real-world server workloads.

---

## Selected Figures

### Overall Performance

![Overall IPC comparison](/projects/research/gwt_ipc_geomean.png)

*Normalized geomean IPC on GWT suite showing degrading performance from all policies but Hawkeye.*


### Suite Characterization Using an Instrumented LRU

![Characterization Table](/projects/research/lru_instrument_table.png)

*Workload suite characterization including the PC entropy metric*


---

## Technical Highlights

### Automation

Designed a benchmarking pipeline capable of launching, monitoring, and collecting results from hundreds of ChampSim simulations.

### Simulator Development

Extended and modernized ChampSim implementations of Hawkeye and Mockingjay while maintaining compatibility with the current simulator architecture.

### Data Analysis

Built Python and Bash tooling to aggregate experimental results and generate visualizations for analysis.

---

## Paper

This page provides a high-level overview of the project. The full methodology, experimental setup, statistical analysis, and discussion are available in the accompanying paper.

<a href="/projects/research/report.pdf" target="_blank" rel="noopener noreferrer">
  → Read the full paper
</a>

---

## Skills Demonstrated

- Computer Architecture
- Cache Replacement Policies
- Performance Evaluation
- Systems Programming
- Experimental Design
- Data Analysis
- Python
- C++
- Bash
- LaTeX
