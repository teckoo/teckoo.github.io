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

add a marker
---------------------
Marker - Single locations on a map. Markers can also display custom icon images.

    var marker = new google.maps.Marker({
      position: myLocation,
      title: 'My Place',
      map: myMap
    });
    marker.setMap(map);

[Sample code](https://github.com/teckoo/HTMLCSS_Javascript_cookbook/blob/master/gis/googlemaps/201-overlay-marker.html)

You can add animation to the marker. 

    var marker=new google.maps.Marker({
      position:myCenter,
      animation:google.maps.Animation.BOUNCE
      });

Use an icon for a marker. 

    var marker=new google.maps.Marker({
      position:myCenter,
      icon:'pinkball.png'
      });
      
add a polyline
---------------------
Polyline - Series of straight lines on a map

A polyline supports the following properties:

* path - specifies several latitude/longitude coordinates for the line
* strokeColor - specifies a hexadecimal color for the line (format: "#FFFFFF")
* strokeOpacity - specifies the opacity of the line (a value between 0.0 and 1.0)
* strokeWeight - specifies the weight of the line's stroke in pixels
* editable - defines whether the line is editable by users (true/false)


add a polygon
---------------------
Polygon - Series of straight lines on a map, and the shape is "closed"

A polygon supports the following properties:

*    path - specifies several LatLng coordinates for the line (first and last coordinate are equal)
*    strokeColor - specifies a hexadecimal color for the line (format: "#FFFFFF")
*    strokeOpacity - specifies the opacity of the line (a value between 0.0 and 1.0)
*    strokeWeight - specifies the weight of the line's stroke in pixels
*    fillColor - specifies a hexadecimal color for the area within the enclosed region (format: "#FFFFFF")
*    fillOpacity - specifies the opacity of the fill color (a value between 0.0 and 1.0)
*    editable - defines whether the line is editable by users (true/false)


Circle and Rectangle
---------------------


Info Windows
-------------
Displays content within a popup balloon on top of a map


Related article
-----------------
[Google Maps Basics]({% post_url /website/2015-04-20-google-maps-basics %})