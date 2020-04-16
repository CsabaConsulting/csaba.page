---
layout: post
title: WearOS Watch Faces
teaser: I didn't find watch face to my taste so I developed two of my own
date: 2020-04-02 23:56:39 +0300
page_id: flutter-clock-follow-up
comments: true
category: blog
---
One advantage of being part of the Android eco-system is that you have a lot of freedom about modifying your gadgets including developing your own solutions. Someone can develop for the iOS platform as well for sure, but Apple requires $100/year ($300 for enterprise) developer fee (vs one time $25 fee of Google Play developer account).

I have to tell you that I'm in a long time journey of finding an ideal smart fitness watch. I tried Garmin before. I had [FitBit Surge](https://www.fitbit.com/pl/shop/surge) from Fresno REI Garage Sale, which had a great GPS and wrist HR. But it could hardly record more than 7 hour long activity, and at that time I was picking up longer and longer ultra runs, including 24 hour ultra run. So I purchased a used [SUUNTO 9](https://www.suunto.com/en-us/suunto-collections/suunto-9/), because that has plenty enough hours to record. Unfortunately both the GPS and the HR performance of that very expensive watch is sub-par. To the point that it ruined one of my FKT attempts in the Yosemite. It's also pretty heavy, but that's understandable if you have a bigger battery. I sold it on eBay and purchased a [Polar M430](https://www.polar.com/us-en/products/sport/M430-gps-running-watch) at the post-Christmas REI Garage Sale (at REI Berkeley), which has obviously excellent wrist HR capability (Polar is in the HR business for a long time) and very good GPS as well. It's also pretty light, bat that comes with a price: it cannot not go too much longer than 3 hours workout, so I yet again I started to keep an eye out for a watch.

A few months after I got the `Polar M430` I read int he news that the [SUUNTO 7](https://www.suunto.com/en-us/suunto-collections/suunto-7/) came out, which is a fitness watch with WearOS, MSRP $499. I got a used one on eBay not so long ago, and it's fairing well so far. I was worried baout the battery, but it seems OK. The wrist HR sensors look very different than the SUUNTO 9. Since I'm also developing my own DIY smart watch I'm almost 100% sure that SUUNTO 7 uses a [Maxim wrist heart rate sensor](https://www.maximintegrated.com/en/design/reference-design-center/system-board/7141.html). I know how it looks exactly, since I try that with my own development, it's a pricey one. It seems to work fine if I keep the strap tight. 

One advantage of having a WearOS watch is the plethora of Watch Faces. However after looking at several ones I had to develop my own:

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

Let me know what you think!
