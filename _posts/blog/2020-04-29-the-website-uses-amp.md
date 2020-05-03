---
layout: post
title: The website is redesigned and converted to AMP
teaser: While seeking the Holy Grail I ended up converting my website to AMP
date: 2020-04-29 23:56:39 +0300
page_id: the-website-uses-amp
comments: true
category: blog
---
End of last July I laid out the path I was gonna take to further improve the website. I wanted a design which has _Material_ features and is also very compact and possibly don't even have any _JavaScript_. I determined that only the menu open / close functionality and the carousel on the landing page were using some JavaScript. The menu could possibly operate in a CSS only manner and maybe even the carousel too.

Let's look at the _CSS_ side: a lot of libraries have extensive features I won't need. Modern libraries have a main _scss_ file and that pulls in all the components feature by feature. I was combing through [Material Components for the web](https://github.com/material-components/material-components-web) cutting off as much meat as I could. The work was overwhelming and I was always thinking there should be a leaner and cleaner solution. Then during my journey I came across [AMP](https://amp.dev/) and realized that many of its requirements align with my goals:

1. It aims for minimizing fluff by essentially eliminating custom _JavaScript_, which helps making the decision not to include any frivolous code. Note: with [amp-script](https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript-tutorial/) there is a way now to add custom _JavaScript_, but it cannot be more than 150 KB, and it is executed in a worker thread, and it has API limitations.
2. It enforces a hard limit on custom CSS styles as well: 50 KB maximum. This inspires anyone to be lean.
3. When your site is served from the *AMP cache* the _Google Analytics_ data will appear in your analytics statistics, so you won't lose anything.
4. There's still a way to supply dynamic content like _Disqus_ blog post comments (a feature I already had for my blog posts).

Additional gains:

* _Google_ will cache your pages and help serve them with it's world class CDN network.
* If you structure your page properly and provide specific meta-data _Google_ will also present search results in an enhanced way.

Possible downsides:

* The lack of custom _JavaScript_ may hurt some. If your site is not static and you need to have forms or other custom code, you have two choices:
  1. You can develop an AMP version of your pages while you can keep serving the enriched version by your won hosting system / service.
  2. Utilize [amp-script](https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript-tutorial/) and [amp-form](https://amp.dev/documentation/components/amp-form/) if the limitations are acceptable for you.
* When your page is served from the cache then Google will clearly reveal that it is coming from _cdn.ampproject.org_ domain or _www.google.com_. I can see that this could confuse the web page reader and may annoy some people. There's a way to overcome this domain issue with the help of [Signed HTTP Exchanges](https://blog.amp.dev/2018/11/13/developer-preview-of-better-amp-urls-in-google-search/). If you serve your website from your own back-end this requires some technical knowledge and weight lifting to accomplish. _CloudFlare_ offers [AMP Real URL](https://support.cloudflare.com/hc/en-us/articles/360029367652-Understanding-Amp-Real-URL) which uses the _Signed Exchanges (SXG)_ browser feature to provide the exact same URL for both the AMP cached and the own hosted instance of your pages. _SXG_ is currently only fully embraced by _Chrome_ and _Android_ browsers.

I'll try to summarize what steps I took to arrive to the current design:

* I yanked out all _CSS_ and _JavaScript_ from the website.
* I started to identify what [AMP components](https://amp.dev/documentation/components/) I'll use.
* For custom CSS I first used [AMP version of Surface CSS framework](https://niutech.github.io/amp-surface/). That provided Material design elements while being compact. However I yanked _Surface AMP's_ grid system and replaced it with _Bootstrap 4_'s superious _CSS Flex based_ grid system.
* After that I yanked out parts I was not using like: forms, tabs, modals.
* I applied my unique color scheme to my _SCSS_
* While restructuring I took advantage of the _cards_ Material design element. This will provide white background for most of the text, that in turn results in better contrast for reading. The font color got darker as well also to increase the contrast. The contrast issue was detected by some accessibility test before, so I was happy to improve on this.
* I also needed to fine tune, like only apply _Surface_'s _ol_ and _ul_ related rules for menus.
* I also also had to customize the styling _amp-menu_, _amp-sidebar_ and some more parts of the website.
* I also transitioned to be based on _SCSS_ and integrate that to the build pipeline. First I started to massage a custom grunt build script for the SCSS -> CSS -> minimize operations. But after some research I realized that _scssify_ can transform my _scss_ into _css_ without any extra Ruby Gems, and the _sass style: compressed_ option in _config.yml_ will automatically minify it as well, also without any extra Ruby Gems. All this without needing any _grunt babel_ build script. That's very neat because even Jekyll hosting providers will suport that and I won't have to run own scripts. I just wish I had discovered _scssify_ and _sass compress_ earlier.
* I decided to not go with my own menu but to embrace _amp-sidebar_. Only some portion of it can be presented horizontally as a menu (this is called _the toolbar_). While I could have hidden the sidebar and the hamburger button at large resolutions I decided to never hide it, so the user can decide which menu to use. The sidebar has social sharing buttons and some extra menus.
* I went through several iterations to convert the _Bootstrap carousel_ to _amp-carousel_. That's only used on the landing page. I haven't been able to revive the _captions_ for the carousel slides yet, but maybe I'll leave it that way. The captions were kinda weird anyway: I had to add font shadow to increase the contrast compared to the slide image at all resolutions (the captions can fall onto different color sections of the slide at different resolutions).
* I converted the _Disqus_ forums to AMP versions. That's not an easy feat: you have to setup a [separate custom domain which hosts a portion of JavaScript what your site will pull in](https://github.com/CsabaDisqus/csabadisqus.github.io/blob/master/amp.html). Fortunately I could use free _gh-pages_ hosting for this, but at first I had trouble to add the second domain to my Disqus administration, so I almost thought I'll have to partially sacrifice my _csaba.dev_ domain for this. I was somewhat hesitant, because people reported that Disqus generates a lot of requests and traffic, but right now I just stayed with Disqus. I'm not sure if a rival service would generate less traffic by the way.
* I also had to generate the SHA 384 fingerprint of the pulled in script and [add it to my site's header meta tags](https://github.com/CsabaConsulting/csaba.page/blob/master/_includes/head.html#L30).
* I needed to convert the _Google Analytics_ bits and pieces to AMP version
* I paid attention to load the _amp-carousel_ on the landing page and the _Disqus_ AMP for blog post pages only. The AMP verifier helps you to point out if you include something you don't actually use.
* I made size optimizations wherever I could, like even shortening my custom hosted font file names.

The big question is: did the numbers improve? How does the new Material / AMP version fare in Lighthouse tests? I certainly don't have _JavaScript_ now (apart from AMP's), and less than 30 KB _CSS_, but _AMP_ brings in some scripts and styles. I'll analyze that [in my next post](/blog/2020/04/30/amp-version-measurements/).
