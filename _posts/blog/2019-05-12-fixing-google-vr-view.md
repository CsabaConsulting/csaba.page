---
layout: post
title: Fixing Google VR View
teaser: The Google VR View started misbehaving multiple times in the past, and since it's archived project now, I needed to roll up my sleeves to fix it.
date: 2019-05-12 01:56:39 +0300
page_id: fixing-google-vr-view
comments: true
category: blog
---
Google VR View provides a way to deliver 360 images and videos to your viewers based on their device. If the person is browsing on a desktop, then he'll get an experience which some other libraries could provide as well (like [Panellum](https://pannellum.org/)). However when the visitor is using a smartphone, then it surpasses other libraries: if the phone is not in a `VR headset` then the viewer can explore the scene using the phone's orientation, and if the phone is inside a `VR headset` then the library provides an appropriate stereoscopic projection for a true 360 experience.

Google has a nice Code Lab which walks you through serving both 360 images and videos: [Code Lab](https://codelabs.developers.google.com/codelabs/vr_view_101/index.html?index=..%2F..index#0). Here is the developer page for the technology (see the VR View for Web section): [360° Media](https://developers.google.com/vr/discover/360-degree-media). I embraced the VR View for Web and created a concept page: [website](https://mrcsabatoth.github.io/magicvr/), [source](https://github.com/MrCsabaToth/magicvr).

Based on that I created several websites commemorating some events, like:

  * Bitwise South Stadium 360 quick tour: [website](https://gdgfresno.github.io/BWSS360tour/), [source](https://github.com/gdgfresno/BWSS360tour)
  * SportsBoard's tour to the 2017 ABCA in Anaheim: [website](https://sportsboard.github.io/ABCA2017/), [source](https://github.com/gdgfresno/ABCA2017)
  * GDG Fresno's 2018 Google Plex visit: [website](https://gdgfresno.github.io/GoogleTrip2018/), [source](https://github.com/gdgfresno/GoogleTrip2018)

As you can see these websites use the same concept: they are based on a `material style`d Jekyll theme, they use Bootstrap and hosted on `GitHub`. Each scene has a 360 image and 360 video snippet. The video is provided by YouTube but the image is served by the Google VR View for Web. For the latter I went for self hosting, so each site has a copy of the necessary files. Just as listed in the README of Google's repository: [VR View files](https://github.com/googlearchive/vrview/tree/gh-pages#downloading-files). As you see the whole repository is now in an archived state.

Since I created the first of these 360 websites it occured to me several times that I wanted to brag about and demo them on my phone. However my phone showed clearly some bug regarding the accelerometer reading because the view didn't smoothly follow the orientation of the phone but it was swirling around violently.

* [2017 January](https://github.com/SportsBoard/ABCA2017/commit/e419af868058c438d7f0756b240ef3b5076a2f1c)
* [2018 January](https://github.com/SportsBoard/ABCA2017/commit/d0c53a76e39ca1de0efde6aac40279bb273b9372)
* Aaaand [2019 May](https://github.com/SportsBoard/ABCA2017/commit/10d5bb998555be5fb185cd1292efc824fe416d93)

The first two occasions I updated the files from the Google V1R View for Web repository, and that seemed to make the bug go away. However the last time I encountered that bug the repository was already archived so I needed to roll up my sleeves and debug. First, I examined the symptoms more closely. I noticed that although the view was swirling around violently when I was moving the phone, when I tried to hold it steady the view was just shaking pretty bad but not swirling as much. It was almost clear that there must have been some translation factor mismatch while calculating the rotation from the accelerator readings. Maybe even along with some axis swaps? I jumped into the source code with that in mind.

I yanked out the `Utils.isR7()` [source line](https://github.com/googlearchive/vrview/blob/gh-pages/build/embed.js#L8752) and all related lines, since that is clearly some leftover of a hack from the past. Then the [meat is here](https://github.com/googlearchive/vrview/blob/gh-pages/build/embed.js#L8760):

```
  // With iOS and Firefox Android, rotationRate is reported in degrees,
  // so we first convert to radians.
  if (this.isIOS || this.isFirefoxAndroid) {
    this.gyroscope.multiplyScalar(Math.PI / 180);
  }
```

Well, guess what: looks like mobile Chrome also needs this `deg` -> `rad` conversion. With that division by 180 the violent swirling went away and everything is back smooth at it was originally. Now I just have to test if it's also functioning as intended when the phone is in a VR headset.
