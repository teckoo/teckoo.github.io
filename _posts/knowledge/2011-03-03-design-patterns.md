---
layout: post
title: "Design Patterns"
categories: [knowledge, development]
tags: 
- development
- design patterns

---

![Sacred Elements of the Faith](/media/content/design_pattern_GoF.png)

Basice concepts
================
 * you solve similar problems again and again.
 * for these similar problems, you need to figure out what are difference and
 what stay the same, then isolate the changes in your code.
 * if all programmers understand this set of common names, communication and
 conversation are a lot easier.

Creational Patterns
====================
## Singleton
Q: what is singleton?

A: A singleton is a class that can be instantiated *only one time in a JVM per
class loader*. This class has only one instance, and provide a *global point of
access*. 


Q: when to use?

A: Use it when only a single instance of an object is required in memory for a
single point of access. E.g.

 * Accessing application properties through a single object. 
 * Accessing in-memory object cache, or resource pools like sockets,
 connections. etc. 

## Factory
Factory pattern returns one of the several production subclasses. It makes the
system independent of the object creation process. 

## Abstract Factory
One level of abstraction higher than a factory method pattern, which means it
returns the factory classes. 


## Prototype
## Builder

Structural Patterns
====================
## Adapter
## Composite
## Decrorator
## Proxy
## Facade
## Bridge

Behavioral Patterns
====================
## Observer
It's good for one publiser, a list of unknown subscribers to be notified for
the update. E.g. when a course information gets modified, students, professors
and college adminstration office all need to be alerted for the update.

![Observer UML](http://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Observer.svg/500px-Observer.svg.png)

Note:

* `java.util.Observable` is a class, not an interface,
addObserver/removeObserver/notifyObservers methods are relative static.
* `java.util.Observer` is an interface, since `update()` usually changes for
sure.

## Visitor
## Command pattern: Command objects encapsulate an action and its parameters
## Memento pattern: Provides the ability to restore an object to its previous
state (rollback)
## Mediator pattern: Provides a unified interface to a set of interfaces in a
subsystem
## State pattern: A clean way for an object to partially change its type at
runtime
## Interpreter pattern: Implement a specialized computer language to rapidly
solve a specific set of problems
## Chain of responsibility pattern: Command objects are handled or passed on to
other objects by logic-containing processing objects
## Template method pattern: Describes the program skeleton of a program
## Strategy pattern: Algorithms can be selected on the fly

Resources
============
 * [Huston Design Patterns](http://www.vincehuston.org/dp/)
