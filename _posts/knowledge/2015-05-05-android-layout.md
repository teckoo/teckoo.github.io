---
layout: post
title: "Android Layout"
excerpt: ""
categories: [knowledge, android]
tags: [android]
---


Layout
---------

 * RelativeLayout
 * LinearLayout

Notes: 

 1. If there is no following line, the message and buttons will overlap with
 the application title. 

     app:layout_behavior="@string/appbar_scrolling_view_behavior"
     

 2. The default weight for all views is 0, so if you specify any weight
    value greater than 0 to only one view, then that view fills whatever space
    remains after all views are given the space they require.

        <EditText
            android:id="@+id/edit_message"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:layout_width="0dp"
            android:hint="@string/edit_message"
        />
