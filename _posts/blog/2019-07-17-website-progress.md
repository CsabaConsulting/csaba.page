---
layout: post
title: Latest changes and plans to this site
teaser: Follow-up on the post a week ago
date: 2019-07-17 01:56:39 +0300
category: blog
---
The website stands but the evolution will continue, probably indefinitely.

I three tests of two types regarding the site:

1. [Official Lighthouse](https://web.dev/measure), [result](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://csaba.page): 100 / 97 / 85 / 100
2. [webpagetest.org Lightouse ](https://www.webpagetest.org/lighthouse), [result](https://www.webpagetest.org/result/190718_GP_4c5e4be4ddfa93794928c92bca912b2f/): 67 / 97 / 93 / 100
3. [webhint.io scanner](https://webhint.io/scanner/), [result](https://webhint.io/scanner/faa4b529-e96f-4771-a76d-e1981c495ce8): 66 hints

Obviously I'll shooting for all 100 score on Lighthouse and 0 hints for the webhint scanner. The following roadmap seems to appear:

1. I'll change the underlying frameworks. Although I upgraded Bootstrap 4.3.1 + JQuery 3.3.1, the latter contains a medium security vulnerability. My website is static, so it's not really an issue, but everything for chasing the numbers! Plus at least this will motivate me to move towards newer frameworks. In the post a week ago I mentioned two material links and the ZURB Foundations. Turns out that some material themes are for React, which I won't use just like Vue or similar frameworks, since I try to be minimalistic and this is static website. I'm pretty sure now that I'll go with the Material Deisgn Lite framework (`MDL`). The only feature I don't see a clear equivalent in `MDL` is the carousel. I'll either get rid of the carousel, or somehow pull in only the carousel from the [mdl-ext](https://github.com/leifoolsen/mdl-ext).
2. When changing frameworks I'll try to work with the `SCSS` version, so I can get rid of any unused fluff at early stage. Possibly same with the `JavaScript` assets.
3. I'll definitely need to do some image optimization. That will possibly involve generating WebP images. Or some heavy optimization.
4. I'll remove unused CSS by an end of build gulp step or possibly with a Jekyll Ruby gem.
5. As far as performance goes `Bootstrap` and `MDL` both uses some fonts from `fonts.googleapis.com`. For a sooner first paint it's advisable to use [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) CSS descriptor of the `@font-face` CSS rule. However these Google fonts are pulled in by a CSS `@import` directive and Google generates the `font-face` rules. Unfortunately without any `font-display` though. More on this problem from [CSS-Tricks](https://css-tricks.com/google-fonts-and-font-display/). Right now I just cut rules fromt he file served by Google, but that has some hashes so may not work forever (?). For better solution I'll try to use one fo the serviec worker solutions in the future.
6. Finally I'm considering the use of a 3rd party blog post CMS / API service, like [Siteleaf](https://www.siteleaf.com/), but only if I find some satisfactory and free service.
