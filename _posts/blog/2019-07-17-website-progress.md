---
layout: post
title: Latest changes and plans to this site
teaser: Follow-up on the post a week ago
date: 2019-07-17 01:56:39 +0300
page_id: website-progress
comments: true
category: blog
---
The website functions but the evolution will never stop.

I ran three tests (of two types) regarding the site:

1. [Official Lighthouse](https://web.dev/measure), [results](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://csaba.page): 100 / 97 / 85 / 100
2. [webpagetest.org Lightouse ](https://www.webpagetest.org/lighthouse), [results](https://www.webpagetest.org/result/190718_GP_4c5e4be4ddfa93794928c92bca912b2f/): 67 / 97 / 93 / 100
3. [webhint.io scanner](https://webhint.io/scanner/), [results](https://webhint.io/scanner/faa4b529-e96f-4771-a76d-e1981c495ce8): 66 hints

Obviously I'll aim to achieve all 100 score for Lighthouse and 0 hints for the webhint scanner in the future. The following roadmap materialized in my mind:

1. I'll change the underlying framework. Although I upgraded to Bootstrap 4.3.1 + JQuery 3.3.1, the latter contains a medium security vulnerability. My website is static, so it's not really an issue, but a newer / better framework could help with better scores, and those achievements should translate to real world enhancements. In the post a week ago I mentioned two material links and the _ZURB Foundations_. Turns out that some material themes are for React,which I won't use (just like Vue or similar frameworks), since I try to be minimalistic and this is a static website after all. I'm pretty sure now that I'll go with the Material Design Lite framework (_MDL_). The only feature I don't see a clear equivalent in _MDL_ is the carousel. I'll either get rid of the carousel, develop my own based on the old 2018 summer version of _android.com_ (see [GitHub issue](https://github.com/google/material-design-lite/issues/4144)), or somehow pull in the feature from [mdl-ext](https://github.com/leifoolsen/mdl-ext).
2. When changing frameworks I'll try to work with the _SCSS_ version, so I can get rid of any unused fluff at an early stage. Possibly same approach with the _JavaScript_ assets, keeping them as minimal as possible.
3. I'll definitely need to do some image optimizations. That will possibly involve generating WebP images. Or some heavy optimization. Possibly generating mobile version of the large carousel images?
4. I'll remove unused CSS by an end of build by a gulp step or possibly with a Jekyll Ruby gem.
5. As far as performance goes _Bootstrap_ and _MDL_ both uses some fonts from _fonts.googleapis.com_. For a quicker first paint event it's advisable to use [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) CSS descriptor of the _@font-face_ CSS rule. However these Google fonts are pulled in by a CSS _@import_ directive and Google generates the _font-face_ rules. Unfortunately, they don't place any _font-display_ descriptor there though, see more about this problem from [CSS-Tricks](https://css-tricks.com/google-fonts-and-font-display/). Right now I just scraped the CSS rules from the file served by Google, but that has some hashes so may not work forever (?). For a better solution I'll try to use one of the service worker solutions, which are kinda hacky, but we'll see.
6. Finally I'm considering the use of a 3rd party blog post CMS / API service, like [Siteleaf](https://www.siteleaf.com/), but only if I find some satisfactory and free service. Note to self: see list at [headlesscms.org](https://headlesscms.org/)
