---
layout: post
title: Flutter Clock - Submission Follow Up
teaser: More details about the Clock I developed for the Flutter Clock contest
date: 2020-02-25 23:56:39 +0300
page_id: flutter-clock-follow-up
comments: true
category: blog
---
I'm very sad to see that my Flutter Clock didnt' even make it to the Honorable Mentions section of the [Flutter Clock contest](https://flutter.dev/clock). I'm thinking maybe I made some mistake, like they could nto test it somehow. I look at the positive side and I'll use some experience I gathered to rewrite the _Deal-O-Round_ PlayN game with Flutter.

In the [first part]({{ site.baseurl }}/{% post_url blog/2020-01-19-flutter-clock-submission %}) I emphasized how I modularized the widget hierarchy, and how I used _InheritedWidget_ to communicate information between widgets. Taht post became big enough that I concentrated on the pracitces I actually used. However I went through some thinking and iterations before I got to the end result.

One principle I follow when I design and implement solutions is to discover existing solutions and possibly not reinvent the wheel unnecessarily. I did describe that I examined many fonts which can be good candidates for the Nixie or the VFD part. That is also one form of the "not reinvent the wheel" principle: by using a font I can save a lot of time by not deisgning every digit and letter I will use, I can just type the information by the fonts.

I also have to talk about the hexagonal grid, which is part of the Nixie tube illumination physics. I did not want to develop my own hexagonal grid drawing logic if I dont' have to. So I looked for a package which can help. [Flutter package repository (pub.dev)](https://pub.dev/) contains many thousands of packages. These cover every kind of use-cases you can ever imagine. For example if my clock would need GPS location to pull weather data, or other location based information, there are multiple packages for that, some of them [cover all three platforms: Android, iOS, web](https://pub.dev/packages/gps). If my clock would want to pull weather information on it's own, there are packages for that, like so: [weather package](https://pub.dev/packages/weather). If I want to display sunset and daylight information there's [a package for that](https://pub.dev/packages/daylight).

Regarding drawing hexagonal patterns first I came across a package which is capable of drawing all kinds of geometric shapes: [geo pattern package](https://pub.dev/packages/geopattern_flutter). However that package focuses on the coloring, and filled patterns. In my case I'd only need the grid, I don't need filling or color palette. At most I'd need to change the color of the grid structure as a whole in a gradient manner mimicking the illumination at the center. I focused on hexagonal pattern and saw [hexagonal_grid](https://pub.dev/packages/hexagonal_grid) and accompanying [hexagonal_grid_widget](https://pub.dev/packages/hexagonal_grid_widget). Unfortunately these still haven't fully satisfied my needs, so I ended up spinning out and debugging [my own grid drawer logic](https://github.com/CsabaConsulting/flutter_clock/blob/master/nixie_clock/lib/vfd_assembly/vfd_painter.dart). But the bottom line is first I looked for packages, because often times it's a good idea to rely on a tested package instead of spending time of debugging your own.
