---
layout: post
title: Augmented Reality Map Application - part 1
teaser: How I got inspired at Google I/O, how I got starstruck by Romain Guy, and how this all connects to Valley Devfest
date: 2019-09-23 23:56:39 +0300
page_id: augmented-reality-map-pt1
comments: true
category: blog
---
The September month so far was very busy with preparations for the Valley DevFest which this year - after 5 previous editions in October - took place in September. The conference website was my usual responsibility since 2016. Every year I either gave some talks or held all day code labs or study jams. Two years ago I got some feedback from my good friend that the website responsibilities took enough toll on me that probably affected the quality of my talks. So the last several DevFests and IWDC conferences I rather focused on facilitating code labs and study jams. These last all day but I could hold up better relying on my experience.

Usually I end up pulling all nighters before conferences for various reasons. I always enhance the conference website: 2016 we had Spanish, Hmong and Arabic localization, and I developed session feedback controls, since feedback is extremely important. In 2017 I also developed an [Androidify application](https://github.com/gdgfresno/androidify-yourself) (derived from GDG Riga's work, I contributed back to the upstream repository those changes which weren't that custom to my app). I wanted the audience to engage and add their own personalized Android avatar to our website. So I integrated the Androidify application with our Firebase back-end and listed the audience's avatars on a dedicated page of the website. To serve the iPhone users I also developed a Polymer based web avatar editor, which got hooked up to the same Firebase back-end. Up to that time we used the GDG Lviv backed Hoverboard conference codebase with lot of my customizations.

Last year I enhanced the Delorean v2 project to handle multiple localizations since our main goal was supporting diversity, we had a separate Spanish track and the website had to have Spanish localization. I also added means to be able to order the sections and sessions. This year I wanted to make an Augmented Reality application for the attendees so they can find their way around easier, mainly finding the classrooms for their talks.

This is not my original idea. During the 2019 Google I/O there were special images placed at several informational boards around the conference site. When someone scanned those images with the conference app an Augmented Reality experience kicked in, and you could see which tent was in which direction in a very intuitive way. The Google I/O conference tent area is fairly large, and although this was my fourth year, sometimes I have some difficulty to get the exact direction. I was fiddling with the app after lunch time one day, when a Googler approached me asking me how I liked the app. I clearly remember that the person have a slight French accent and it was very nice of him to chat with me. It turned out that he is one of the main developers behind this app. I got starstruck. Only later I realized when I replayed our conversation in my head that he was no other than [Romain Guy](https://twitter.com/romainguy)! One of the main dudes behind Sceneform, ARCore and Filament! Every time I think about this I facepalm myself why I didn't talk more with him.

Although Bitwise South Stadium - the usual venue of Valley Devfest - is not as large as the Shoreline Amphitheater tent area, we still have 5 classrooms (6 back in the past), and it's not necessarily that evident which classroom is where. I started to read about Sceneform SDK months before. I had a concept in my head and I started some active work two days before the conference. Of course this resulted in a preliminary application submission at 3am on the day of the conference.

After some hoops the application got accepted, here are the main pointers:
* [Store listing](https://play.google.com/store/apps/details?id=com.valleydevfest.armap)
* ["Promo" Video](https://www.youtube.com/watch?v=vHz358sAPLM)
* [Outstanding Issues](https://github.com/gdgfresno/DevfestARMap/issues)
* [Source code](https://github.com/gdgfresno/DevfestARMap)

Although the app got accepted a little late for the conference, it'll make an extremely good monthly talk and it can be enhanced in many ways. I'll get into more details in a follow-up blog post.
