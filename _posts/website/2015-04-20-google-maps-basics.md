---
layout: post
title: Google Maps Basics
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


Basic skeleton
===================

create a new Map object

    var myMap = new google.maps.Map();

To specify a point in maps:

    myLocation = new google.maps.LatLng($lat, $lng);

set Zoom: `myMap.setZoom(12)`

Sample files:

 * [Show a map with event registration](https://github.com/teckoo/HTMLCSS_Javascript_cookbook/blob/master/gis/googlemaps/101-simple-map.html)
 * [Show a map with onLoad action](https://github.com/teckoo/HTMLCSS_Javascript_cookbook/blob/master/gis/googlemaps/102-map-onLoad.html)


Localization
----------------

    <script
            src="http://maps.googleapis.com/maps/api/js?language=zh-CN">
    </script>

The language code list is at <https://developers.google.com/maps/faq#languagesupport>


    <script
            src="http://maps.googleapis.com/maps/api/js?region=gr">
    </script>

For a list of region codes, visit <http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry>.

[Google Maps Overlays]({% post_url /website/2015-04-21-google-maps-overlays %})


Zooming with mouse
-----------------------

`map.enableKeyDragZoom();` hold one of the control keys (SHIFT, CTRL, ALT) and use mouse to draw a rectangle to zoom to this region. 

[KeyDragZoom Examples](http://google-maps-utility-library-v3.googlecode.com/svn/tags/keydragzoom/2.0/docs/examples.html)

Controls
-----------------

    var options = {
        scaleControl: true,
        panControl: true/false,
        zoomControl: true,
        mapTypeControl: true,
        streetViewControl: true, 
        overviewMapControl: true,
    }