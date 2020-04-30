---
layout: post
title: WearOS Watch Faces
teaser: I didn't find watch face to my taste so I developed two of my own
date: 2020-04-02 23:56:39 +0300
page_id: flutter-clock-follow-up
comments: true
category: blog
---
One advantage of being part of the _Android_ ecosystem is that you have a lot of freedom about modifying your gadgets including developing your own solutions. Someone can develop for the iOS platform as well for sure, but Apple requires $100/year ($300 for enterprise) developer fee (vs one time $25 fee of Google Play developer account).

I'm in a long time journey of finding an ideal smart fitness watch. I tried Garmin before. I had [FitBit Surge](https://www.fitbit.com/pl/shop/surge) from Fresno REI Garage Sale, which had a great GPS and wrist HR. But it could hardly record more than 7-8 hour long activity, and at that time I was picking up longer and longer ultra runs, including a 24 hour timed ultra run. So I purchased a used [SUUNTO 9](https://www.suunto.com/en-us/suunto-collections/suunto-9/), because that has plenty enough hours to record. Unfortunately both the GPS and the HR performance of that very expensive _SUUNTO 9_ is sub-par. Sub-par to the point that it ruined one of my _FKT attempt's_ in the Yosemite. It's also pretty heavy, but that's understandable if you have a bigger battery. I sold it on eBay and purchased a [Polar M430](https://www.polar.com/us-en/products/sport/M430-gps-running-watch) at the post-Christmas REI Garage Sale (at REI Berkeley), which has obviously excellent wrist HR capability (Polar is in the HR business for a long time) and very good GPS as well. It's also fairly light weight, but that comes with a price: it cannot not record activity (with wrist HR and GPS on) too much longer than 3 hours workout, so yet again I started to keep an eye out for a watch.

Actually just a months after I got the _Polar M430_ I already read in the news that the [SUUNTO 7](https://www.suunto.com/en-us/suunto-collections/suunto-7/) fitness watch will be a _WearOS_ watch, MSRP $499. I was watching eBay and bid on some and I got a used one not so long ago, and it's fairing well so far. I was worried about the battery, but it seems OK. The wrist HR sensor looks very different from the _SUUNTO 9_. Since I'm also developing my own DIY smart watch I'm almost 100% sure that _SUUNTO 7_ uses a [Maxim wrist heart rate sensor](https://www.maximintegrated.com/en/design/reference-design-center/system-board/7141.html). I know how it looks exactly, since I try that with my own development. It's a pricey one and when I tried the development kit it was not too precise, but that must have been either my mount or my _Arduino_ code since it seems to work fine in the _SUUNTO 7_ fortunately if I keep the strap tight. 

One advantage of having a _WearOS_ watch is the plethora of Watch Faces. However after looking at several ones I had to develop my own to satisfy my exact needs and my imagination:

* [VFD Watch Face](https://play.google.com/store/apps/details?id=dev.csaba.vfdwatchface):
  - [Store listing](https://play.google.com/store/apps/details?id=dev.csaba.vfdwatchface)
  - [Source code](https://github.com/CsabaConsulting/VFDWatchFace)
  - The time display section somewhat mimics pixelated digital display / VFD.
  - The face offers two rows of complication slots, three slots each in a row above and below the time section.
  - The complications also pick up the pixelated look and the color scheme wherever possible.
  - A main goal is to preserve battery also decrease installation size, so there's no background image. The resources are vectorial. The watch face embeds a font (VT323) which provides the pixelated look though.
  - The abundance of complication slots provides high configurability.
* [Flower Complication Watch Face](https://play.google.com/store/apps/details?id=dev.csaba.complicationflowerwatchface):
  - [Store listing](https://play.google.com/store/apps/details?id=dev.csaba.complicationflowerwatchface)
  - [Source code](https://github.com/CsabaConsulting/FlowerComplicationWatchFace)
  - It only consist of complications, complete freedom of configurability
  - A main goal is to preserve battery and also decrease installation size, so there's no background image. Resources are vectorial.

Let me know what you think about them!
