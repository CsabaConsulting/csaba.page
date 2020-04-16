---
layout: post
title: Valley DevFest 2019
teaser: Central Valley techies and geeks had fun time again at the 2019 edition of Valley DevFest
date: 2019-09-25 23:56:39 +0300
page_id: valley-devfest-2019
comments: true
category: blog
---
Valley Devfest 2019 was a great conference in my opinion. I broke my promise of not giving a talk when I'm responsible for the website. I also worked on an Augmented Reality companion app ([see my earlier blog post about it](/blog/2019/09/23/augmented-reality-map/)) until 3am, and I had to fill in some session spots. This year we didn't have any Googler presenters so we had to produce more talks on our own.

I had an individual talk about [Git workflows](https://valleydevfest.com/sessions/-LoCRUdvmR5exkd8VBeC), which is [recorded by GMAC](https://www.youtube.com/watch?v=l58oiQ6b9e8&list=PLfLYzWZuIvXIgmR6oCaYYA-Ez8agOrHXw). My main goal was to give a deep understanding of the attendees how a simple tool like diff plays the fundamental building role of such large ecosystems as `GitHub`, `GitLab`, `BitBucket` and alike. I started with a brief history of source control systems so we could see where we are at compared to the past. The secondary goal of the talk was to show standard branching and workflow conventions and tools like [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) (see also excellent [cheat sheet](https://danielkummer.github.io/git-flow-cheatsheet/)) and [Git Town](https://github.com/Originate/git-town). These tools simplify complex multi stage `git` command series so you can follow branching and merging conventions much easier. In turn it also boost collaborative work and software quality. The pinnacle of this is server side merging with `git town` (yes: the merge actually happens at `GitHub`, and if something fails the `PR` is rejected). See more in the [slide deck of the talk](https://docs.google.com/presentation/d/16T4EqzuZHYX53yhGBzxRBkCQoLLqHRt8thyk220M0OA/edit?usp=sharing).

I filled in two more presentation slots though: I organized two sessions of `Machine Learning` lightning talks. Those two talks featured 4 courseworks each presented by the students of the [Fresno Data Science meetup](https://www.meetup.com/Fresno-Data-Science-Meetup/):

1. [Machine Learning Lightning Talks - pt 1](https://valleydevfest.com/sessions/-Lp6_GNoyj02WWdiMldH)
   * Lourdes Lopez: Predicting Animal Shelter Adoption Outcomes
   * Paul Settle: Our Children: Predicting a Child's Ability to Pass the CAASPP
   * Martin Kunz: Predicting Work Flow
   * Beth Weinman, Csaba Toth, Grace Liang, Elizabeth Gaw: Can We See Climate Change in Fresno?
2. [Machine Learning Lightning Talks - pt 2](https://valleydevfest.com/sessions/-Lp6aV17h3-51ku3-HD-)
   * Federico Ulloa Rios: Bearing Fault Detection through Convolutional Neural Networks
   * Csaba Toth: Unconventional analysis of the Ridgecrest earthquakes
   * Jorge Ovando: Predicting Song Popularity using Spotify Track Features
   * Dale Herzog: Applied Machine Learning in Oncology

I'm really proud of all of the students. I know several of them will be successful and will pursue data science further. Lourdes Lopez for example already presented [Intro to Python Libraries for Data Science](https://www.meetup.com/tracydevs/events/265689461/) at the [Tracy Developer Meetup](https://www.meetup.com/tracydevs).

As you can see I didn't only organize the lightning talks but I had a part of a presentation in each. Talking about climate change in Fresno we basically started to scrape the surface but we could show evidence of temperature rise by looking at the data with H-index technique: we counted how many days the temperature was above a critical level each year. See [slide deck](https://docs.google.com/presentation/d/1IqFjXYFqpjQ567UVJMp_fZ27WKTG83Lx6A8k0-pGqPA/edit#slide=id.g62b8e3bb4d_0_0) and [iPython notebooks in this directory](https://drive.google.com/drive/folders/1wWAMhoSwQsg8XtWKzl1gtr_aJFock4ai).

As for the Ridge Crest earthquake series I used `PCA` (Principal COmponent Analysis) to find the two new perpendicular fault lines which emerged nicely from the data. By inputting the lat/long coordinates the `PCA` found the fault lines in my opinion. Besides that I wanted to see how one month of shakes happened in time and space. The web demo illustrates that in extreme fast forward manner, but the size and color of the dots and also the volume of the pop sounds reflect the magnitude of the shakes. Materials:
* [Slide deck](https://docs.google.com/presentation/d/1GDe6HQaciGS4OGWyzncJL1kN2KIfUgDj5Rlc6on4f4g/edit#slide=id.p)
* [ipynb and data source files](https://github.com/CsabaConsulting/DataScienceBootcampHomework)
* [web demo of shake time series](https://csabaconsulting.github.io/RidgeCrestAudioDemo/)
* [source code of the web demo](https://github.com/CsabaConsulting/RidgeCrestAudioDemo)

In hindsight I pretty much overworked myself (yet again) with all of this, so I could perform better at the Git talk at the end of the day if I wouldn't show my car at the electric car week the night before, if I would not work on the Augmented Reality Map app until 3am, and I wouldn't have the two other lightning talk sets. But I'm really happy that I pushed through, I could elevate people at the lightning talks and possibly fare still decently doing approximately 3-4 people's workload. I also know that other organizers also put in more than 100% on their parts to make this event as great as possible.

Our next conference is the `IWDC` (International Women's Day Conference) in 2020 spring.
