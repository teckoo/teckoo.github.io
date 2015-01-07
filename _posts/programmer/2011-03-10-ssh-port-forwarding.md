---
layout: post
title: "利用ssh port forwarding穿越防火墙"
excerpt: "如果防火墙只开一个端口"
categories: [blog, programmer]
tags: [programmer]
---

ssh port forwarding不常用到,　每次用的时候我都要看manual再试.　其实我还是挺愿意看文档的.　现在还是记下来,　为了省时间, 没准也省别人点时间.　

这里只讲一个我经常使的一个小应用.　我在家里router只为ssh打开了一个端口.　平时我的大多数事情都通过命令行就行了.　但个别时候还是要用GUI的.　我平时都用NX client连到家里的机器上,　而NX通讯还要再开一个端口,　而且数值不固定.　我又不想再在router上设置多个端口了.　这个时候可以利用ssh port forwarding的特性把所有的通讯都导入到ssh上来进行.　

* 外部机器上运行
        
        ssh -nNT -L 2222:localhost:8088 -p 8088 my.home.machine 
        # 家里的端口是8088

* 在nx client上设置连接到本机上　(而不是连到家里的机器上)

        localhost port 2222

* 注意在nx clinet上不能选上"Disable encryption of all traffic" 

这么做唯一的缺点是有一点ssh encryption的overhead. 但是既然从外部网络,　加密还是有必要的.

----

另一个会使用的地方是传文件:　比如有一回我在朋友家聊天,　他要传一些大文件到我办公室的机器A上.　办公室的机器A有ssh但只对内网开放.　而同一内网另一台机器B可以从外面登录但没有空间存大文件.　

这种情况下的解决方法是在机器Ｂ上开个port forwarding的服务做中转,　从朋友家的机器上就可以把文件传到机器Ａ上了.　方法和上面大同小异.


