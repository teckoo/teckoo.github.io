---
layout: post
title: "Linux utility commands"
categories: [knowledge, linux]
tags: [linux]
---


How to use SHA2 checksum
-------------------------

For example, you download a file called 'some-file.tar.gz', then the website
owner provides you a checksum. You can save it as 'some-file.tar.gz.sha256'

    8cd7e85435f0ad04a0540037436ae9593608cf7f456bf8ff1d44f659572ec8dc some-file.tar.gz

then in a terminal, run this command: 

    sha256sum -c some-file.tar.gz.sha256

The output should be: 

    some-file.tar.gz: OK


How to check port number: 

    netstat -anp | grep java
