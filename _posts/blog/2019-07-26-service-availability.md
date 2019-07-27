---
layout: post
title: On the side note of service availability
teaser: I wanted to write about this three weeks ago. Service outages happen.
date: 2019-07-26 01:56:39 +0300
page_id: service-availability
comments: true
category: blog
---
About three weeks ago there was a span of a week when I experienced service outage from multiple places.
I'll try to list all of the events:
* Facebook, Instagram and WhatsApp had an outage on July 3rd: [Mashable](https://mashable.com/article/facebook-instagram-whatsapp-outage/)
* Slack had a seemingly bigger outage, although I did not experience as much of it as some people reported [Slack outage](https://statusgator.com/services/slack).
* Cloudflare Web Application Firewall (WAF) had some issue which resulted in 502. As it turned out a seemingly innocent regular expression was resource hungry [Cloudflare WAF outage blog](https://new.blog.cloudflare.com/cloudflare-outage/). Looks like regular expressions is something to watch out for, since a bad one took down Stackoverflow (!) back in 2016: [Stackoverflow regex down 2016](https://stackstatus.net/post/147710624694/outage-postmortem-july-20-2016)
* CloudFlare's situation is really hard because they mitigate DDoS (`Distributed Denial of Service`) attacks on a daily basis, since that's their service (to protect from those DDoS attacks), therefore many code need to scale really well there. So I'm not surprised at this [CloudFlare outage map](https://statusgator.com/services/cloudflare).
* Not so much after and during the CloudFlare issues I also received reports that certain sub-services of Azure have specific problems. When we look at maps like [this](https://statusgator.com/services/azure) we need to keep in mind that these are compound maps. The one I cite is the `July 03, 2019 07:04 UTC, WARN, about 1 hour, Information Diagnostic logs, Autoscale, Classic Alerts (v2)`.
* Linode is very good communicating scheduled maintenance, and most of the time they don't result in any outages. However the biggest box (16 CPU, 768MB+ SSD) experiencing problems sometimes. We had a surprise restart where the production site was down in the middle of the day for 1.5-2 hours. The VM host had some physical problems and the migration to other host took that much time. Earlier we did have a surprise restart two weeks before that one, but that was overnight.

THe bottom line is: service outages happen. The best is if the architecture of the system is redundant enough that it can survive these. Sometimes that is not possible though.
