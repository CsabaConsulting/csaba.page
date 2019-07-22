---
layout: post
title: Disqus integration and font self hosting
teaser: Follow-up on the latest webite progress
date: 2019-07-22 01:56:39 +0300
page_id: website-progress-2
comments: true
category: blog
---
The website functions but the evolution will never stop.

I mentioned the [Google font problem](https://css-tricks.com/google-fonts-and-font-display/) in my previous blog post. I dig deeper and it turned out that the best way is to self host the fonts, see [Reference 1](https://ashton.codes/preload-google-fonts-using-resource-hints/), [Reference 2](https://medium.com/clio-calliope/making-google-fonts-faster-aadf3c02a36d). The good news is that for downloading there's a nice tool written by Mario Ranftl which is a great help: [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts?source=post_page---------------------------).

The other recent change is the integration of Disqus. I tried to apply `preload` but had to gave up on that because the browser was warning and the `crossorigin` tag was causing trouble as well.

New test runs regarding the site:

1. [Official Lighthouse](https://web.dev/measure): 99 / 97 / 85 / 100
2. [webpagetest.org Lightouse ](https://www.webpagetest.org/lighthouse): 95 / 97 / 93 / 100
3. [webhint.io scanner](https://webhint.io/scanner/): 68 hints. Many of these are Netlify hosting things, which are out of my jurisdiction (unless I change host)

TODO:

1. Image optimization, [Cloudinary](https://webspeedtest.cloudinary.com/results/190722_3C_bd48d7a50edb0585023c655145414915) is a good point to start. I'm afraid I won't use WebP, because Safari doesn't seem to support it yet.
2. Ditch `jQuery` + `Bootstrap` and migrate to `MDL` (Material Deisgn Lite).
3. Cut JS and SCSS fluff from the get go and use postprocessing unused CSS/JS removal
4. Headless CMS [headlesscms.org](https://headlesscms.org/). I'm exploring Google Spreadsheet / Docs as possible headless CMS. Especially that later I'll use my experience to migrate the [gdgfresno.com](https://gdgfresno.com/) website form `Squarespace`.
