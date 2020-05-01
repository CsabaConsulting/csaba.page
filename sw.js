// sw.js

// AMP
importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init();

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'csaba.page',
    suffix: 'v1.6.2',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Workbox handle our precache list
// NOTE: This will be populated by jekyll-workbox-plugin.
workbox.precaching.precacheAndRoute([]);
