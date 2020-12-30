---
title: "evekeys"
summary: Python 3.x module that isolates keywords from an event-based and custom-grouped textual corpus.
tags:
- python module
- keyword analysis
- data processing
- mixed methods

date: "2020-04-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Icon of a key.
  focal_point: Smart

links:
- name: Docs
  url: https://pypi.org/project/evekeys/
url_code: "https://github.com/lingeringcode/evekeys"
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

# evekeys: Isolate keywords from an event-based and custom-grouped textual corpus

By Chris Lindgren <chris.a.lindgren@gmail.com>

Distributed under the BSD 3-clause license. See LICENSE.txt or http://opensource.org/licenses/BSD-3-Clause for details.

**Documentation**: [https://evekeys.readthedocs.io/en/latest/](https://evekeys.readthedocs.io/en/latest/)

## Overview

A set of functions that uses scikit-learn to conduct a TF-IDF analysis to isolate keywords from event-based documents. It answers the following questions:

1. What keywords represent a particular period of content?
2. What keywords represent a particular group of content from a particular period?

It assumes you have:

- imported your corpus as a pandas DataFrame,
- included metadata information, such as a list of dates and list of groups to reorganize your corpus, and
- pre-processed your documents.

It functions only with Python 3.x and is not backwards-compatible.

**Warning**: evekeys performs little to no custom error-handling, so make sure your inputs are formatted properly. If you have questions, please let me know via email.

## System requirements

* pandas
* sklearn
* tqdm

## Installation

```pip install evekeys```
