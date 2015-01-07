---
layout: post
title: "Spring Batch"
excerpt: "Java batch processing"
categories: [blog, programmer]
tags: [programmer]
---

Concepts 
==========

What is Spring Batch?

Batch processing requirements: 

* Large data volume
* Automation
* Robustness
* Reliablity
* Performance

Spring Batch is an open source batch-oriented framework dealing with most
common needs of batch applications. 

What is it good for?  Main features:

* Spring Framework foundations: reuse dependency injection, AOP
* batch-oriented processing: good for data reading/writing
* ready-to-use components:  I/O for databases and files
* Robustness and reliability: able to define skip/retry etc


## Job/Step

job execution
monitor/restart on failure


### Chunk Processing
Spring Batch handles read-write scenarios using ItemReader and ItemWriter.
ItemProcessor is used to handle transformation before send it to ItemWriter.


## API
Reading a flat file: FlatFileItemReader (e.g. read CSV file)

DefaultLineMapper: delegates line reading

LineTokenizer to split a line into fields. 

fieldSetMapper to transform the split line into a domain object.


Resources
===========
 * [Official doc](http://docs.spring.io/spring-batch/reference/)




