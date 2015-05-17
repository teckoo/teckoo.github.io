---
layout: post
title: "Beginning a GeoDjango project"
categories: [blog, django]
tags: [django, geodjango]
---

Install postgis and extension. If you miss 'postgis-scripts', 
you might see an error message when create extension step. 

    sudo aptitude install postgis postgresql-9.3-postgis-scripts
    # Geospatial libs
    sudo aptitude install binutils libproj-dev gdal-bin

Create a PostgreSQL database, and make geo extension available

    sudo -u postgres
      psql geodjango
      CREATE EXTENSION postgis
      createdb -T template_postgis -O webuser geodjango

Create a project

    django-admin startproject geodjango
    
ESRI Shapefile

    .shp: Holds the vector data for the world borders geometries.
    .shx: Spatial index file for geometries stored in the .shp.
    .dbf: Database file for holding non-geometric attribute data (e.g.,
          integer and character fields).
    .prj: Contains the spatial reference information for the
          geographic data stored in the shapefile.

To check a layer summary info

    ogrinfo -so -fields=YES TM_WORLD_BORDERS-0.3.shp TM_WORLD_BORDERS-0.3

Spatial Queries
=================

    >>> pnt_wkt = 'POINT(-95.3385 29.7245)'
    >>> from world.models import WorldBorder
    >>> qs = WorldBorder.objects.filter(mpoly__contains=pnt_wkt)
    >>> qs
    [<WorldBorder: United States>]


    >>> from django.contrib.gis.geos import Point
    >>> pnt = Point(12.4604, 43.9420)
    >>> sm = WorldBorder.objects.get(mpoly__intersects=pnt)
    >>> sm
    <WorldBorder: San Marino>


    >>> sm = WorldBorder.objects.get(name='San Marino')
    >>> sm.mpoly
    <MultiPolygon object at 0x24c6798>
    >>> sm.mpoly.wkt # WKT
    MULTIPOLYGON (((12.4157980000000006 43.9579540000000009,
    12.4505540000000003 43.9797209999999978, ...
    >>> sm.mpoly.wkb # WKB (as Python binary buffer)
    <read-only buffer for 0x1fe2c70, size -1, offset 0 at 0x2564c40>
    >>> sm.mpoly.geojson # GeoJSON (requires GDAL)
    '{ "type": "MultiPolygon", "coordinates": [ [ [ [ 12.415798, 43.957954 ], [
    12.450554, 43.979721 ], ...

