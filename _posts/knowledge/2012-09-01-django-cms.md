---
layout: post
title: "Django CMS"
excerpt: "FeinCMS and Django-CMS"
categories: [knowledge, django]
tags: [django]
---

Add TinyMCE to the toolbar 
----------------------------
 1. download [TinyMCE](http://www.tinymce.com/download/download.php)
 2. unzip tiny_mce.$version.zip
 3. put tiny_mces folder to site_media/
 4. modify `fein/settings.py`

    FEINCMS_RICHTEXT_INIT_CONTEXT = {
          'TINYMCE_JS_URL': STATIC_URL + 'tiny_mce/tiny_mce.js',
    }

