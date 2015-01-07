---
layout: post
title: "生成self-signed certificate时犯的一个错误"
excerpt: "今天生成self-signed certificate, 在Apache里测试没事, 用svn时报错. 在java里调用还可能碰到SSLHandshakeException."
categories: [blog, website]
tags: [website]
---

今天生成 self-signed certificate, 结果偷懒没把所有选项填全, 结果在Apache没事, 但用`svn`时出了没见过的错. 记在这里. 

    Server certificate was missing commonName attribute in subject name

具体生成步骤在[knowledge](/knowledge/entry/apache.html#create-a-self-signed-certificate). 下回要记着把事情做全了.

    Country Name (2 letter code) [AU]:
    State or Province Name (full name) [Some-State]:
    Locality Name (eg, city) []:
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:
    Organizational Unit Name (eg, section) []:
    Common Name (eg, YOUR name) []:C2       
    Email Address []:

在Java JVM里如果调用https, 会产生SSLHandshakeException. 

    javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
        at com.sun.net.ssl.internal.ssl.Alerts.getSSLException(Alerts.java:174)
        ... 
            
这时要告诉Java JVM你的security sertificate在哪里.　下面是我在Ubuntu下面的处理情况.　

    sudo keytool -import -keystore /etc/java-6-sun/security/cacerts -file /etc/apache2/ssl/server.crt

    [sudo] password for c2: 
    Enter keystore password:

第一个password是我的用户密码,　第二个密码是缺省的java keystore密码.　可是我的certificate 已经是去掉密码了的啊.　


    Enter keystore password:  
    keytool error: java.io.IOException: Keystore was tampered with, or password was incorrect

我试了又试也不成,　最后终于发现原来这是要JVM的密码.　缺省值是'changeit'. 
我呸! 不带这么玩儿的.　写下来省下别人抓耳挠腮的时间吧.　


