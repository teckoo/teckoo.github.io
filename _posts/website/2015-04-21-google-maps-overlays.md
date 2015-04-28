---
layout: post
title: Google Maps Overlays
categories: [blog, website]
tags: [website]
---


I read this book to learn the basics. 

<div class="middle">
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0"
scrolling="no" frameborder="0"
src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=ss_til&ad_type=product_link&tracking_id=teckoo-20&marketplace=amazon&region=US&placement=B00HSO0X26&asins=B00HSO0X26&linkId=35ZK3BS4VJBXWUWE&show_border=true&link_opens_in_new_window=true">
</iframe>
</div>


Overlays
===============

To place a marker
---------------------

    var marker = new google.maps.Marker({
      position: myLocation,
      title: 'My Place',
      map: myMap
    });

[Google Maps Basics]({% post_url /website/2015-04-20-google-maps-basics %})