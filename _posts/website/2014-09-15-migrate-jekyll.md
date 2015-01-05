---
layout: post
title: Migrate to Jekyll on Github  
categories: [blog, website]
tags: [github, jekyll, website, linux]
---

## Installation ## 

1. Install Ruby 2.1.2 on Ubuntu 12.04 LTS

   follow <https://gorails.com/deploy/ubuntu/12.04>

{% highlight bash %}
       sudo apt-get update
       sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev \
       libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev \
       libcurl4-openssl-dev python-software-properties


       sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev
       curl -L https://get.rvm.io | bash -s stable
       source ~/.rvm/scripts/rvm
       echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc
       rvm install 2.1.3
       rvm use 2.1.3 --default
       ruby -v
{% endhighlight %}

2. [Install Bundler](https://help.github.com/articles/using-jekyll-with-pages)

        gem install bundler

    Gemfile:

{% highlight bash %}
        source 'https://rubygems.org'
        gem 'github-pages'

        bundle install 
        # in the future to update
        bundle update
{% endhighlight %}

3. Running Jekyll

{% highlight bash %}
        bundle exec jekyll serve --watch
{% endhighlight %}

Then use browser to view <http://0.0.0.0:4000>
