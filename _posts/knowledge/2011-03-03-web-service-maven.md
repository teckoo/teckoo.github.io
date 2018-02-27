---
layout: post
title: "Web Services in Maven"
categories: [knowledge, development]
tags: [development]
---

Maven POM build an EAR
=======================


{% highlight xml linenos %}
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM.4.0.0 
  http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion> 4.0.0 </modelVersion>
  <groupId> com.teckoo </groupId>
  <artifactId> events </artifactId>
  <version> 1.0 </version>
  <packaging> ear </packaging>

  <build>
    <plugins>
    <plugin>
      <artifactId> maven-ear-plugin</artifactId>
      <version>2.8</version>
      <configuration>
        <version>6</version>
        <defaultLibBundleDir>lib</defaultLibBundleDir>
        <skinnyWars>true</skinnyWars>
        <modules>
          <ejbModule>
            <groupId>com.teckoo</groupId>
            <artifactId>myEJB</artifactId>
          </ejbModule>
          <warModule>
            <groupId>com.teckoo</groupId>
            <artifactId>myWar</artifactId>
          </warModule>
        </modules>
        <env-entries>
          <env-entry>
            <description> Application Name </description>
            <env-entry-name>java:app/env/appname</env-entry-name>
            <env-entry-type>java.lang.String</env-entry-type>
            <env-entry-value>MyEAR</env-entry-value>
          </env-entry>
        </env-entries>
      </configuration>
    </plugin>
  </plugins>
  </build>
</project>

{% endhighlight %}

Maven for WAR
================

{% highlight xml linenos %}
<project>
  <groupId>com.teckoo</groupId>
  <artifactId>myWAR</artifactId>
    <packaging>war</packaging>
    <version>1.0</version>
    <name>myServlet</name>
    <build>
        <plugins>
            <plugin>
                <groupdId>org.apache.maven.plugins</groupdId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.2</version>
                <configuration>
                    <source>${compile.java.version}</source>
                    <target>${compile.java.version}</target>
                </configuration>
            </plugin>
            <plugin>
                <groupdId>org.apache.maven.plugins</groupdId>
                <artifactId>maven-source-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <configuration>
                    <failOnMissingWebXml>false</failOnMissingWebXml>
                    <packagingIncludes>WEB-INF/*.xml,WEB-INF/MANIFEST.MF,WEB-INF/classes/**</packagingIncludes>
                    <archive>
                        <manifest>
                            <addClasspath>true</addClasspath>
                            <classpathPrefix></classpathPrefix>
                            <addDefaultImplementationEntries>true</addDefaultImplementationEntries>
                            <useUniqueVersions>true</useUniqueVersions>
                        </manifest>
                    </archive>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>

{% endhighlight %}

Maven for EJB
================

{% highlight xml linenos %}

<project>
    <groupdId>com.teckoo</groupdId>
    <artifactId>myEJB</artifactId>
    <version>1.0.0</version>
    <packaging>ejb</packaging>
    <name>myEJB</name>
    <properties>
        ...
    </properties>
    <dependencies>
        ...
    </dependencies>
</project>
{% endhighlight %}

Maven for MDB
=================

{% highlight xml linenos %}


{% endhighlight %}
