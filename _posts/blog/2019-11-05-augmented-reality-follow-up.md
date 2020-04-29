---
layout: post
title: Augmented Reality Map Application - part 2
teaser: Some more details about the Augmented Reality Map application
date: 2019-11-05 23:56:39 +0300
page_id: augmented-reality-map-pt2
comments: true
category: blog
---
The _Augmented Reality_ Application had several very interesting conclusions.

One is that I wanted to generate the 3D scene by Shape Builder. THe thinking behind this is that the application size could be reduced. Although the geometry would be hand coded, but a rectangular board and a bug number on it doesn't seem to be too complicated. I have the code for that still in a branch. The numbers could be textures of the billboards. That images could become big if we resort to high resolution, in case of low resolution the large board could reveal pixelation of the texture. But one 3D board geometry could act as any sign: we could just replace the textures.

Unfortunately that didn't work. Nothing showed up, and I'm not sure if it was due to the giant texture resolution or not. I almost got stuck so to get that part of the job done, I learned Blender within extremely minimal time and I developed each board 1-by-1. Each board has its own number as a 3D extruded object on it: a red board with a white number so it'd be very visible. The downside of this way is two fold: a.) I need to design every board in Blender and that wouldn't scale for a bigger building well (see that I needed to generate an sfa and sfb for each and every board: [Model directory](https://github.com/gdgfresno/DevfestARMap/tree/master/app/sampledata/models)). b.) The extruded numbers can pose 3D computation pressure if their tessellation is too refined (in layman terms if the curves of the number 3 for example are segmented into too many sections). In any case I got this part of the job done.

A second was a feature I ended up dropping. This would be a compass pointer to a selected billboard. In my original design I would have listed all the billboards on a bottom list view, and the user could pick their choice. Since the user might be facing away from the billboard's location at the time of the selection, it'd be ideal if a floating compass which is always ahead of the user's view would point towards the desired billboard. I produced the 3D geometric calculation for that and also derived the 3D model from an arrowhead, but somehow the compass worked funky. I had not had time to debug this after midnight so right now it's dropped, but I plan to bring it back.

In the future actually if there's a conference, and the user would log in to the app (right now the app doesn't have any authentication), then we could examine the user's schedule and automatically focus on the right billboard which represent the user's scheduled class for the given time. This could be a future capability as well in case the app is a conference companion.

The app can be a stand-alone venue helper as well. Larger venues could have many more activator photos. Each of those photos would be located in a well known position, and the app could list the closest locations or the user could browse all listings. Since I talked about scalability earlier, such a version would really require the texturized billboard method. In such case the app could dynamically load the list of _POI_ (Point of Interests) from an on-line database (the app could have a default set in case the user is off-line and the fresher update could come through on-line). This way the app's capability could be administered dynamically!

Here is my presentation about the app: [Applied Augmented reality with Sceneform SDK](https://docs.google.com/presentation/d/1BQKad_-6TiIM3k6Iz4jzcJUvGCLfSqlU-NLIuJZUiYA/edit#slide=id.p).

_SceneForm_ really brought the _Augmented Reality_ game to a higher level where the entry point doesn't require too complicated geometric knowledge (unless you want some extra things). Such moves required for _Augmented Reality_ to finally have a real break-through. One extra thing to check out in my app is the logic which causes the billboards to automatically rotate towards the user. If that wasn't done then the user could walk around the billboard and if faced from the side the user would just see a red line. During the _C-64_ era - before GPUs really brought enough computation power into computers - such boards were actually easier to implement: someone just had to scale the texture and don't worry about too complicated projection to the user's viewpoint. In the modern days - since SceneForm is full 3D all around - we need to apply some extra logic to achieve that simple "billboard" effect. See the [billboard logic here](https://github.com/gdgfresno/DevfestARMap/blob/master/app/src/main/java/com/valleydevfest/armap/BillBoardNode.java).

Here are some more pointers:
* [Store listing](https://play.google.com/store/apps/details?id=com.valleydevfest.armap)
* ["Promo" Video](https://www.youtube.com/watch?v=vHz358sAPLM)
* [Source code](https://github.com/gdgfresno/DevfestARMap)
