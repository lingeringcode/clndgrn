---
title: "urlcounter"
summary: Python 3.x module that tallies shared URLs within an event-based corpus.
tags:
- python module
- circulation studies
- summary statistics
- data processing
- mixed methods

date: "2020-04-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Icon of a link.
  focal_point: Smart

links:
- name: Docs
  url: https://urlcounter.readthedocs.io/en/latest/
url_code: "https://github.com/lingeringcode/urlcounter"
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

# urlcounter

By Chris Lindgren <chris.a.lindgren@gmail.com>
Distributed under the BSD 3-clause license. See LICENSE.txt or http://opensource.org/licenses/BSD-3-Clause for details.

## Overview

```urlcounter``` is a set of functions that tallies full and domain URLs for periodic, event-defined social-media posting data. It assumes you seek an answer to the following questions about link-sharing:

1. What are the top x full URLs and domain URLs from each group during each period?
2. What are the top x full URLs and domain URLs from each group-module (detected community) in each period?

To use the module, import and follow the below example for guidance:

```python
import urlcounter as urlc

dict_url_counts = urlc.top_urls(
    df=cdf, #DataFrame of full corpus
    periods=(1,10), #Tuple providing range of numbered periods
    hubs=(1,10), #Tuple providing range of numbered hubs
    period_dates=period_dates, #Dict of Lists with dates per period
    list_of_regex=[htg_btw,htg_fbt,htg_anti], #List of regex patterns defined for each group
    hl=hub_lists, #Dict with keyed lists of hub usernames per period
    columns=['cleaned_urls', 'retweets_count', 'hashtags', 'username', 'mentions'], #Provide a List of column names to use for search and counting
    url_sample_size=50, #Desired sample size limit, e.g., Top 50
    verbose=True #Boolean. True prints out status messages, False prints nothing
)
```

### Example outputs

It returns a ```Dict``` keyed by user-defined group names, period ranges, and module ranges:

```python
# Overall period-based URL summary data with keyed group name, 'fbt'
## '1' = Period 1
## 'fbt' = Keyed group name + 'urls_per_period' and 'domains_per_period' = Summary total data
output['1']['fbt_urls_per_period']
output['1']['fbt_domains_per_period']

# Overall community hub-based URL summary per period data with keyed group name, 'fbt'
## '1' = Period 1
## 'fbt' = Keyed group name 'fbt'
## '1' = Community hub/module 1
## 'hub_sample_size', 'hub_tweet_sample_size','hub_url_counts','hub_domain_counts' = Summary total data
output['1']['fbt']['1']['hub_sample_size']
output['1']['fbt']['1']['hub_tweet_sample_size']
output['1']['fbt']['1']['hub_url_counts']
output['1']['fbt']['1']['hub_domain_counts']
```

```python
{'1': #Start period 1
  'fbt_domains_per_period': [ #start period 1 totals for group keyed as 'fbt'
    ('twitter.com', 3003), ('instagram.com', 1001), ('facebook.com', 202)
  ],
  'fbt_urls_per_period': [
    ('https://twitter.com/user/status/example', 202),
    ('https://www.instagram.com/p/example/', 202),
    ...
  ]}, #end period 1 totals for group keyed as 'fbt'
  {'fbt': { #start period 1, module/hub 1
    '1': {
      'hub_domain_counts': [
        ('example.com', 178),
        ('example2.go.lc', 14),
        ('example3.com', 10),...
      ],
      'hub_sample_size': 103,
      'hub_tweet_sample_size': 486,
      'hub_url_counts': [
        ('https://example.com/politics/story-title-1/',120),
        ('https://example.com/politics/story-title-2/',58),
        ...
      ]
      }
    }
  }, #end period 1, module/hub 1
  ...
}, #end period
...
```

### top_urls()

Tallies up URLs in corpus.
    
Arguments:

- ```df```= DataFrame. Corpus to query from.
- ```columns```= a List of 5 column names (String) to reference in DF corpus. **!IMP**: *The order matters*:
  1. Column with URLs (String) that includes a list of URLs included in post/content: 
    - Example: ['https://time.com','https://and-time-again.com']. The List can also be a String, '[]' since the function converts literals.
  2. Column with number of times a post was shared (Integer), such as Retweets on Twitter.
  3. Column with group data (String), such as hashtags from tweets.
  4. Column with usernames (String), such as tweet usernames
  5. Column with target content data (String), such as tweets with targeted users from module, or stringified list of targeted people like tweet mentions.
- ```url_sample_size```= Integer. Desired sample limit.
- ```periods```= Tuple. Contains 2 Integers, which define the range of periods, e.g., (1,10)
- ```hubs```= Tuple. Contains 2 Integers, which define the range of module/hubs, e.g., (1,10)
- ```period_dates```= Dict of Lists with dates per period: pd['1'] => ['2018-01-01','2018-01-01',...]
- ```list_of_regex```= List. Contains:
    1. list of regex patterns with group identifiers, such as hashtags
    2. String. Key identifier for group.
- ```hl```= Dict. Contains lists of community-detected usernames
- ```verbose```= Boolean. True prints out status messages (recommended), False prints nothing

Returns:

- Dict. See documentation for output details for data access.

### url_counter()

Helper function for ```top_urls()```. It transforms an incoming list of Strings into a regex string to facilitate a search.
    
Arguments:

- ```df```: DataFrame. Array of Strings to write as a regex String.
- ```columns```: A List of 4 column names to use from corpus, but only uses the first two in this function:
    1. Name of URL column that includes a list of URLs included in post/content.
    2. Integer. Number of times a post was shared, such as Retweets on Twitter.

Returns:

- A ```List``` that includes:
  - ```sorted_totals```: List of Tuples that contain 2 items:
      - String full URL
      - Integer. Total number of URL instances (including RTs).
  - ```sorted_domain_totals```:
      - String domain URL
      - Integer. Total number of URL instances (including RTs).

### regex_lister()

Helper function for ```top_urls()```, but also can be used to create the group regex search parameters on its own. It transforms an incoming list of Strings into a regex string to facilitate a search.
    
Arguments:

- ```the_list```: List. Array of Strings to write as a regex String.
- ```key```: String. Denotes the group name

Returns:

- ```keyed```: Tuple with;
    - ```'key'``` (String) that denotes the group name
    - ```'listicle'``` (regex String) that will be used for a search

```urlcounter``` functions only with Python 3.x and is not backwards-compatible (although one could probably branch off a 2.x port with minimal effort).

**Warning**: ```urlcounter``` performs no custom error-handling, so make sure your inputs are formatted properly! If you have questions, please let me know via email.

## System requirements

* pandas

## Installation
```pip install urlcounter```
