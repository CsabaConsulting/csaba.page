---
layout: post
title: Optimizing Images for your Website
teaser: Today's step was to optimize some images
date: 2019-07-22 01:56:39 +0300
page_id: image-optimization
comments: true
category: blog
---
The website's evolution will never stop.

I went ahead and analyzed the home page and the about page by `Cloudinary`. Cloudinary offered to me even without registration to download the optimized same format (but resized + compressed) and also webp format. I saw that particularly `Safari` is not able to interpret `WebP` format yet: [Can I use WebP](https://caniuse.com/#search=webp).

After having both webp and traditional image versions my intention was to offer both of them to the browser and they could pick the one which suits them better. At first I got scared because a search top hit pointed to [this article](https://www.digitalocean.com/community/tutorials/how-to-create-and-serve-webp-images-to-speed-up-your-website) which described how to apply `Apache` web server modules so the server can intelligently serve the better available format (knowing the browser user agent identifier). The advantage of that could be that the HTML DOM does not have to be modified, but on one hand this could be fragile to an extent because it has many moving parts, on the other hand not even speaking of the fact that with hosting like Netlify I cannot screw around with the web server or application server.

The good news is that `HTML5` provides `srcset` capabilities to serve alternative formats or sizes of the same image ( [Blog reference](https://bitsofco.de/why-and-how-to-use-webp-images-today/), [Mozilla reference](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) ). The actual construct I used in my commit: [W3Schools](https://www.w3schools.com/tags/att_source_srcset.asp). I may also use the various size options for the carousel banner images, although with the `Material Design Lite` transition those may actually go away.

Now, interestingly, the Lighthouse test results didn't improve. Seemingly the served images are still the old ones, maybe the site cached somehow the old ones?That's unlikely though, but clearly the sizes shown are for yesterday's non optimized versions. I'll revisit the tests the next days again.

Stay tuned for the `Material Design Light` transition and headless CMS efforts.
