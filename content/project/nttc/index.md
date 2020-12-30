---
title: "nttc (Name That Twitter Community)"
summary: Python 3.x module for processing and analyzing community-detected data.
tags:
- python module
- topic modeling
- data processing
- mixed methods

date: "2020-04-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Screen capture of visualized kmeans topic model.
  focal_point: Smart

links:
- name: Docs
  url: https://nttc.readthedocs.io/en/latest/
url_code: "https://github.com/lingeringcode/nttc"
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
#slides: example
---

## NTTC (Name That Twitter Community!): Process and analyze community-detected data

by Chris Lindgren chris.a.lindgren@gmail.com Distributed under the BSD 3-clause license. See LICENSE.txt or http://opensource.org/licenses/BSD-3-Clause for details.

Documentation: [https://nttc.readthedocs.io/en/latest/](https://nttc.readthedocs.io/en/latest/)

### Overview

A set of functions that process and create topic models from a sample of community-detected Twitter networks' tweets. It also analyzes if there are potential persistent community hubs (either/and by top mentioned or top RTers).

It assumes you seek an answer to the following questions:

- What communities persist or are ephemeral across periods in the corpora, and when?
- What can these communities be named, based on their top RTs and users, top mentioned users, as well as generated topic models?
- Of these communities, what are their topics over time?

Accordingly, it assumes you have a desire to investigate communities across periods and the tweets from each detected community across already defined periodic episodes with the goal of naming each community AND examining their respective topics over time in the corpus.