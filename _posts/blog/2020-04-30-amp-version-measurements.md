---
layout: post
title: Measurements of the new AMP website
teaser: I measured how the new Material design AMP version performs and iterated based on the suggestions
date: 2020-04-30 23:56:39 +0300
page_id: amp-version-measurements
comments: true
category: blog
---
First, I have to add that AMP allows custom _JavaScript_ - with limitation - by using [amp-script](https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript-tutorial/), and there's also way to have forms by [amp-form](https://amp.dev/documentation/components/amp-form/).

I re-run the [three tests I ran last July for an earlier version](/blog/2019/07/16/website-progress/). The results after some iterations:
1. [Official Lighthouse](https://web.dev/measure), [results](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://csaba.page): 92 / 100 / 100 / 100
2. [webpagetest.org Lighthouse ](https://www.webpagetest.org/lighthouse), [results](https://www.webpagetest.org/result/200430_M0_b8022c27ac7d0b53b9dac80500e810a5/): 84 / 100 / 100 / 100
3. [webhint.io scanner](https://webhint.io/scanner/), [results](https://webhint.io/scanner/4faa65f3-930d-4b96-a610-20f666d9556d): 36 hints

The iteration corrections included:

* Converting the icons referenced in the PWA manifest to _png_ (they were _jpg_).
* The footer's amp-sidebar had the same ID (due to copy-paste error) as the main menu's amp-sidebar.
* I added back the _lang="en"_ attribute to the html tag. An AMP test extension complained about its presence, but it is needed for PWA Accessibility. Interestingly the on-line AMP Test doesn't complain about that.
* Removed some _itemscope_ and _itemtype_ attributes which made the content invalid on some pages - indicated by the [structured content testing tool](https://search.google.com/structured-data/testing-tool).

Result assessment:

* The 36 _webhint.io_ hints: either out of my jurisdiction (AMP served files) or irrelevant (who cares about Chrome version 51 and prior?) and such. That number is down anyway from the earlier 66, so I'm OK with that. I'll still go through the list again if there's anything I can remediate.
* As for the two lighthouse tests all the metrics are now at 100, except the performance. The _webpagetest.org_ test's performance indicator improved from 67 to 84. That great news given this test uses 3G network speed with a Motorola G gen 4 simulated phone.
* What is the only step back is the _web.dev_ performance indicator: decreased from 100 to 92. The metrics say the First Contentful Paint and the First Meaningful Paint is at 2.4s, but I can see clearly on the screenshots that the site is up way earlier.
* Removing the carousel could help with the performance. The other expendable AMP JS asset is the analytics. It rather seems like those scripts are not loading async (possibly also due to the fact that they are placed in the header instead of the usual bottom of the body place). I'll keep thinking on how to improve further, the goal is always and still a 100 / 100 / 100 / 100 score.
