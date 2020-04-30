---
layout: post
title: The website is redesigned and converted to AMP
teaser: While seeking the Holy Grail I ended up converting my website to AMP
date: 2020-04-29 23:56:39 +0300
page_id: redesigned-and-converted-to-amp
comments: true
category: blog
---
End of last July I laid out the path I was going to take to further enhance the site. I wanted a design which has _Material_ features, also very compact and possibly don't even have JavaScript. I determined that only the menu open and close functions and the carousel on the landing page were using some JavaScript. The menu can be done CSS only, and maybe even the carousel.

The CSS side: lot of libraries have extensive features I won't need. Modern libraries have a main _scss_ file and that pulls in all the components feature-by-feature. I was combing through [Material Components for the web](https://github.com/material-components/material-components-web) and cutting off a lot meat. During my journey I came across [AMP](https://amp.dev/) and realized that many of its requirements align with my goals:

* It aims for minimizing fluff by essentially eliminating custom JavaScript, which helps making the decision not to include any frivolous code.
* It enforces a hard limit on custom styles as well: 50 KB maximum. That inspires you to be lean.
* When your site is served from the _AMP cache_ the _Google Analytics_ data will appear in your analytics statistics, so you won't loose anything.
* There's still a way to supply dynamic content, like _Disqus_ blog post comments (which I already have for my blog posts).

On top of that Google will cache the pages, it helps deliver them fast with it's world leading CDN network. If you structure your page well Google will also present search results in an enhanced way. The technology may have some downsides:

* The lack of custom JavaScript may hurt some. If your site is static then you can benefit from converting it to a lean form. If you need to have forms or other custom code, then you can develop AMP version of your pages which Google can serve from it's cache while you can still serve enriched content
* When your page is served from the cache then Google will clearly reveal that it is coming from cdn.ampproject.org domain or www.google.com. This may confuse the web page reader. You can overcome this domain issue if you serve your website from your own back-end. _CloudFlare_ offers [AMP Real URL](https://support.cloudflare.com/hc/en-us/articles/360029367652-Understanding-Amp-Real-URL) which uses _Signed Exchanges (SXG)_ browser feature to provide the exact same URL for both the AMP cached and the own hosted instance of your pages. If you read the custom back-end method it requires some fiddling around, and since [CloudFlare AMP Real URL](https://support.cloudflare.com/hc/en-us/articles/360029367652-Understanding-Amp-Real-URL) uses _SXG_ it is currently only fully embraced by _Chrome_ and _Android_ browsers.

I'll try to summarize what steps I took to arrive to the current design:

* I yanked out all CSS and JavaScript from the website
* I started to identify what AMP components I'll use
* For custom CSS I first used [AMP version of Surface CSS framework](https://niutech.github.io/amp-surface/). That provided Material design elements while staying compact. I yanked out its grid system though and replaced it with _Bootstrap 4_'s CSS Flex based grid system which is superior in my opinion.
* After that I further yanked out parts which are not supported by _AMP_ (like forms), or I was not using them (tabs, modals). I also needed to fine tune, like only apply _Surface_'s _ol_ and _ul_ related rules for menus. And also had to customize to style _amp-menu_, _amp-sidebar_ and some more parts of the website.
* I also transitioned to work from _SCSS_ and integrate that to the build pipeline. First I thought I started to massage a custom grunt build script. But then after researching the web I realized that _scssify_ can transform my _scss_ into _css_ without any extra Ruby Gems, and the _sass style: compressed_ option in _config.yml_ will automatically minify it as well, also without any extra Ruby Gems. That's very neat and I wish I had discovered that earlier.
* I decided to not go with my own menu but to embrace _amp-sidebar_. It can be done in a way, that portion of it can be present horizontally as a menu (it's the toolbar). While I could have hidden the sidebar and the hamburger button at large resolution I decided to never hide it, so the user can decide which menu to use. Especially that the sidebar has social sharing buttons and some extra menus.
* I went through several iterations to convert the _Bootstrap carousel_ to _amp-carousel_. That's only used on the landing page. I haven't been able to revive the caption for the carousel slides, but maybe I'll leave it that way. The captions were kinda weird anyway: I had to add font shadow to increase the contrast compared to the slide image at all resolutions (the captions can fall onto different color sections of the slide at different resolutions).
* I converted the _Disqus_ forums to AMP versions. That's not an easy feat: you have to setup a [separate custom domain which hosts a portion of JavaScript what your site will pull in](https://github.com/CsabaDisqus/csabadisqus.github.io/blob/master/amp.html). Fortunately I could use free _gh-pages_ hosting for this, but first I had trouble to add that second domain to my Disqus adminstration, so I almost thoguht I'll have to partially sacrifice my _csaba.dev_ domain for this. I also had to generate the SHA 384 fingerprint of the pulled in script and [add it to my site's header meta tags](https://github.com/CsabaConsulting/csaba.page/blob/master/_includes/head.html#L30). I was somewhat hesitant, because people reported that Disqus generates a lot of requests and traffic, but right now I just stayed with Disqus. I'm not sure if a rival service would generate less traffic by the way.
* I needed to convert the Google Analytics code to AMP version
* I paid attention to load the _amp-carousel_ on the landing page and the _Disqus_ AMP for blog post pages. The AMP verifier helps you to point out if you include something you don't actually use.
* I made size optimizations wherever I could, like even shortening my custom hosted font file names.

The big question is: how are the numbers? Did the first display or load time improve? How does the new AMP version fare in Lighthouse tests? I certainly don't have _JavaScript_ now, and less than 20 KB _CSS_, but _AMP_ means some script and style load. I'll analyze that in my next post.
