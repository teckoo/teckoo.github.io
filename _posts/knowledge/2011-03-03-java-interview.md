---
layout: post
title: "Java Interview Questions"
excerpt: "Java Interview Preparation, Java 面试复习"
categories: [knowledge, development]
tags: [development]
---

Fundamentals
================
## Q: usage of Java packages: 
 
 A: 1. resolve naming conflict when different packages have classes with the
 same names. 
 2. helps to organize files within project.

## Q: explain class loaders, dynamic class loading
A: JVM calls bootstrap class loader for the 1st class. 
static class loading: 'new' an instance
dynamic class loading: 

        Class myclass=Class.forName("my.class.name");
        MyObject obj=myclass.newInstance();
        obj.call_regular_method();

## constructors
* static initializer or staic block        

  This part of 'static' code is called even before constructors are executed. 

* how to call another constructor within one constructor?

    `this(id)`

* how to call superclass constructor

    `super(id)`

## overloading vs overridden    
 * overloading: multiple methods in the same class with the same method name
 but different method signatures. define the same operation in differeent ways
 for different data. 
 * overriding: deals with two methods, one in the parent class and the other
 one in the child class and has the same name and signatures. define the same
 operation in different ways for different object types.


Objects
========
## Advantage of OOP
A: Polymorphism, Inheritance, Encapsulation (PIE)

An object in Java that passes more than one IS-A tests is polymorphic in nature

Every object in Java passes a minimum of two IS-A tests: one for itself and one
for Object class

Static polymorphism in Java is achieved by method overloading (static binding
in compile time)

Dynamic polymorphism in Java is achieved by method overriding (late bidning)

''Inheritance'' is the inclusion of behaviro and state of a base class in a
derived class so that they are accessible in the derived class.  Two types of
inheritances: 

 1. Implementation inheritance (class inheritance)
 1. Interface inheritance (type inheritance)

''Encapsulate'': refers to keeping all the related members
(variables and methods) together in an object. 

Q: How Java allocate stack and heap memeory

A: Stack: thread-safe, each thread owns their own stack, store primitivate
vars, local vars, methods. 

Heap: shared by multiple threads, store member vars (fields)

Q: instanceof vs typeof
A: TODO


## Interface, Abstract Class and Inner class
Interface: Java way to implement multiple inheritance. You can design a class
to have multiple behavior of their parents.

Pro: 

 1. not so complex as multiple inheritance C++
 2. easy to implement "callback functions"

Interface vs Abstract Class
 * Interface is good for constant chaning classes. If you have classes need to
 have same signature with various implementation, use Interface.
 * Abstract class provides '''default behavior''' methods to sub-classes, and
 abstract methods for full implementation (implementation inheritance). 
 * Remember, you can implement multiple Interfaces, but extend only one abstract class

Inner classes are useful in the following situations:
 * a helper object needs to control the private implementation of a class
 * a class needs to spawn help objects with the same protocol but different
 implmentations of the protocol
 * a class needs to spawn help objects that have their own state

Q: why are there some interfaces without any method declared?

A: These interfaces act like markers, aka 'tag', e.g. java.io.Serializable,
java.lang.Clonable. 


Q: Immutable objects and benefits

A: Immutable objects' state doesn't change change once it is instantiated.
Benefits: 

  1. thread-safe
  2. cache and share the references without worrying about value state

## Collections and  Arrays
Collections and Arrays are utilities for the collection objects, i.e.
List/Set/Map, providing functions such as 

* Polymorphic algorithms: sort, shuffle, reverse, binary search
* Set algebra: subset, intersection, union
* Performance: much faster than vector, hashtable
* Thread-safety: use utility function or concurrent classes
* Immutability: wrapper implementation available for ummutable
* Extensibility: interface and abstract classes

[<img src="/media/content/java-collections.jpg" alt="Top level structure"
style="width:640px">](/media/content/java-collections.jpg)

Source: [Top level structure](/media/content/java-collections.dot) in graphviz

    String[] myArray = {"Java", "J2EE", "XML", "JNDI"};
    System.out.println(Arrays.asList(myArray)); 
    //factory method Arrays.asList(...)


Q: static factory methods

A: static factory methods are alternatives to create objects through
constructors. e.g. Arrays.asList, valueOf() methods. 

Q: shallow comparison vs deep comparision
A: shallow: ==, two variables point ot the same object in memory (more
restricted)

deep: 'equals()', as long as the values of the objects are equal. It will
return true.

e.g.

    String a=new String("ABC");
    String b=new String("ABC");
    a==b; // return false
    a.equals(b); // return true


## Vector vs ArrayList, Hashtable vs HashMap
Vector and Hashtable are synchronized, thread-safe.  ArrayList and HashMap are
not thread-safe, but they are fast. When come to add/delete a hashmap or
arraylist, use external utilites to lock the obj

    Map myMap = Collections.synchronizedMap (myMap);
    // single lock for the entire map

    List myList = Collections.synchronizedList (myList); 
    // single lock for the entire list

Or, use concurrent class

    java.util.concurrent.ConcurrentHashMap
    CopyOnWriteArrayList
    CopyOnWriteArraySet

## Stack vs Queue
| Stack:LIFO, java.util.Stack | Queue:FIFO, java.util.Queue |

## List
## Array
## Map
## Heap
## BitSet

IO
=========
## String
Q: What is an intern() method in the String class?

A: A pool of Strings is maintained by the String class. When the intern() method
is invoked equals(...) method is invoked to
determine if the String already exist in the pool. If it does then the String
from the pool is returned. Otherwise, this String
object is added to the pool and a reference to this object is returned. For any
two Strings s1 & s2, s1.intern() ==
s2.intern() only if s1.equals(s2) is true.

## InputStream
## OutputStream
## File
## StreamTokenizer
## Zip File stream
Read/Write a property file
----------------------------
Suppose we need to read a property file passed through command line. 

    import java.io.FileInputStream;
    import java.io.IOException;
    import java.util.Properties;
     
    public class App {
        public static void main( String[] args ) {
          Properties prop = new Properties();
     
          try {
            //load a properties file
            prop.load(new FileInputStream(argv[0]));
     
            //get the property value and print it out
            System.out.println(prop.getProperty("db.instance"));
            System.out.println(prop.getProperty("db.user"));
            System.out.println(prop.getProperty("db.pwd"));
     
          } catch (IOException ex) {
            ex.printStackTrace();
            }
        }
    }

Multi-threads 
=============
Q: process vs thread

A: process is an execution of a program, but a thread is a single execution
sequence within a processes (aka lightweight process). Multiple threads share the same the heap. 


Q: How many ways of creating a thread?

A: 1. extending the `Thread` class
   2. Implenting `Runnable` interface.
  This is the preferred way since you have the ability to iheritate multiple
  interface and extend other parent class. 

Thread state diagram:
[<img src="/media/content/thread-states.jpg" alt="Thread state diagram"
style="width:640px">](/media/content/thread-states.jpg)

Q: yield() vs sleep(), sleep() vs wait()

A: yield(): change from running state to runnable state. 
sleep(): change from running state to waiting/sleeping state. 

wait(1000): sleep up to 1 second, if receives notify() or notifyAll(), it will
change to runnable state. 
sleep(1000): will sleep exactly 1 second. 


Q: how threads communicate with others?

A: by wait(), notify() and notifyAll(). 

## More reading:
Note: 
Allen Holub at http://www.javaworld.com
article entitled “Programming Java threads in the real world”.
 URLs for some of the parts are:
 http://www.javaworld.com/javaworld/jw-09-1998/jw-09-threads.html,
 http://www.javaworld.com/javaworld/jw-10-1998/jw-10-toolbox.html, etc.


JDBC
=============
Network
=============
Web Service
=============
JMS
============
Logging
============
Testing
============
Utilities
=============
Date conversion
----------------
Format a data string:

    new java.txt.SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SS").format(new Date());


New features
=============

Java 5
--------
2004 Sep released, + 500 classes and interfaces

 * annotation
 * generic: enable the compiler to catch data type errors
 * improved looping syntax: for-in
 * autoboxing: convert data between class objs and primitives, values in heap
   and pointer in the stack
 * new Enum data type
 * import static method

Java 6
-------
2006 Dec released, focus on new spec, + another 500 classes and interfaces
 * XML processing, web service: JAXB, JAX-WS
 * JDBC 4.0: support generic and annotation, simplified access to relational
 data sources. 
 * annotation-based programming
 * Java compiler API: allow I/O to abstraction of the FS
 * app client GUI API: AWT/Swing

Java 7
-----------
2011,
 
 * diamond operator
 * strings in switch statement
 * Automatic resource management
 * Numeric literals with underscores: 1_000_000
 * Improved multi-catch exception handling: ` try{} catch (ExceptionOne | ExceptionTwo |
    ExceptionThree e) {}`
 * Supporting dynamism: A new package, java.lang.invoke, consisting of classes
 such as MethodHandle, CallSite and others, has been created to extend the
 support of dynamic languages.

Keystore
----------
Java 在JVM里联接self-assigned certificate会出现SSLHandShakeException, 解决的方法是要告诉Java你的apache certificate 在哪里.　

    keytool -import -keystore /etc/java-6-sun/security/cacerts \
        -file /etc/apache2/ssl/server.crt


Note:

    which keytool
    /usr/bin/keytool

    /usr/lib/jvm/java-6-sun-1.6.0.22/jre/lib/security/cacerts 
    symlinks to /etc/java-6-sun/security/cacerts



General questions
==================
## Java vs C/C++
 * Java doesn't have pointers. C has explicit memeory management, Java uses
 garbage collection. 
 * Java doesn't support multiple inheritance, it uses multiple interface
 inheritance.
 * Java doesn't have struct/union. Traditional structure are implmented in
 Collections. 
