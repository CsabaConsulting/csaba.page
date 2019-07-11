---
layout: post
title: Website details and evolution
teaser: How I'll keep evolving this website.
date: 2019-07-10 01:56:39 +0300
category: blog
---
Once I bought `csaba.page` I also decided to try `Netlify` for hosting. It's free just like as GitHub static page hosting and it's also `Jekyll` capable. The earlier version was truly one page, however I'll start blogging. For the one page I used Bootstrap 3 Native version which is a jQuery-less Bootstrap implementation. Now that I have a Blog section and I added About as well I needed a menu, so I had to bring back jQuery. I took the chance and worked on to upgrade to Bootstrap 4 though and therefore I brought jQuery 3 instead of 1.x.

[Website source code](https://github.com/CsabaConsulting/csaba.page/commits/master)

Future plans involve optimizing load by slimming down as much JavaScript and CSS as possible. Upgrading to Bootstrap 4 gets rid of the glyph icon fontset. Bootstrap 4 CSS refers to Google Montserrat font though. I'll see how this can be optimized. I will slim the JavaScript content, which currently only used for the hamburger menu and the carousel. I'm eyeing: [Materialize](https://github.com/Dogfalo/materialize), [Material UI](https://material-ui.com/), [ZURB Foundation](http://foundation.zurb.com/sites/download.html/). 

I'm contemplating to try [Eleventy](https://www.11ty.io/) (inspired by [benediktmeurer.de](https://github.com/bmeurer/benediktmeurer.de/)) instead of Jekyll.

I'll work through improvements what Lighthouse test shows.

Finally, I'll keep the blog alive.
