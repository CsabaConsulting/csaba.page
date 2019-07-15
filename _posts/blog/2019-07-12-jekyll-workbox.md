---
layout: post
title: Service workers for your PWA (Progressive Web App) website
teaser: Manifest for PWA is a no brainer, but what about service workers?
date: 2019-07-12 01:56:39 +0300
category: blog
---
Two pillars for transforming your website into a `PWA` (`Progressive Web App`) are the manifest and having service workers. Besides that it's better if your website is repsonsive, follows `PRPL` principles, but I won't go into these right now. Manifest is kind of a no brainer, although requires some work. You need to identify the main theme color and main background color for your website, and generate various sizes of the icon / favicon of your webiste and reference some of those from the manifest and some of them from the header meta section of your website pages. There are deveral websites ([Example](https://tomitm.github.io/appmanifest/)) which help you generate the series of images and the corresponding manifest and HTML meta tags.

On the other hand the service workers are not as evident since your webiste could take several shapes and forms (for example `SPA` / non `SPA`) and directory and file hierarchies. You first need to decide what caching strategies you prefer and for what part of your website: do you prefer off-line first or on-line first approach. On-line first approach could be good idea if your website for example displays crypto currency tickers and their current values. In case of a static website with a blog section (like mine) you are good to go with an off-line first approach. Still, you need to configure which files exactly the service worker infrastructure should cache for you for off-line use and what way (expiration, etc.).

In the past `Google` provided libraries like `sw-precache` to help with this configuration task and posisbly cut down plumbing code related to the service worker activation mechanisms. The newest generation of `Google`'s service worker helper library is [Workbox](https://developers.google.com/web/tools/workbox/). `Workbox` takes the help to a next level and I believe we arrived to a point where the configuraion is minimal and painless.

There's one more thing: in case you are using any static site generator framework, then there's a very good chance that your framework has a package which provides a layer on top of `Workbox` and you can deal with it at the level of your generator framework instead of `Workbox`'s `JavaScript` API. A common principle in software engineering is to avoid reinventing the wheel, so you can spend your time with the more custom and meaningful tasks of your project. Unless your framework of choice is very exotic and doesn't ahve much cumminity behind it yet, service worker configuration and dealing with `Workbox` must have been done by thousands of engineers before you, and steps probably taken to make this part seamless. This means always look how your selected framework supports PWA and pretty sure there's an interface to `Workbox`.

At the time of this blogpost this site currently uses Jekyll, and I saw two candidates (multiple choices is always a good sign): [jekyll-pwa-plugin](https://github.com/lavas-project/jekyll-pwa) or [jekyll-workbox-plugin](https://github.com/bmeurer/jekyll-workbox-plugin). Both of them seems nice, but according to [this blogpost](https://benediktmeurer.de/2018/12/06/introducing-jekyll-workbox-plugin/) I decided to go with the latter one. Since Jekyll is `RoR` (Ruby on Rails) based the "package" you need to install is a Ruby Gem. The configuration is simple, well readable (`yaml` format) and no fluff inside the expected `_config.yml` and the only other thing. I only needed to add two `JavaScript` entries

1. In `default.html` 7 lines starting at: [source](https://github.com/CsabaConsulting/csaba.page/blob/master/_layouts/default.html#L26)
2. A short `sw.js` file stub ([source](https://github.com/CsabaConsulting/csaba.page/blob/master/sw.js)) with the most important placeholder `workbox.precaching.precacheAndRoute([]);`

And that's all!
