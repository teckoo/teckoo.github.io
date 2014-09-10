---
layout: post
title: Migrate to Jekyll on Github  
---

## Installation ## 

1. install Ruby 2.1.2 on Ubuntu 12.04 LTS

   follow <https://gorails.com/deploy/ubuntu/12.04>

2. [install Bundler](https://help.github.com/articles/using-jekyll-with-pages)

        gem install bundler

    Gemfile:

        source 'https://rubygems.org'
        gem 'github-pages'

        bundle install 
        # in the future to update
        bundle update

3. running Jekyll

        bundle exec jekyll serve --watch

Then use browser to view <http://0.0.0.0:4000>
