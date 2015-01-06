---
layout: post
title: "Bash programming"
excerpt: "Tips for bash programming"
categories: [knowledge, linux]
tags: [linux]
---

Login without password prompt
===================================

    $ ssh-keygen -t rsa -b 2048 -f ~/rsync-key


    Generating public/private dsa key pair.
    Enter passphrase (empty for no passphrase): [press enter here]
    Enter same passphrase again: [press enter here]
    Your identification has been saved in /home/user/rsync-key.
    Your public key has been saved in /home/user/rsync-key.pub.
    The key fingerprint is:
    8c:57:af:68:cd:b2:7c:aa:6d:d6:ee:0a:5a:a4:29:03 user@localhost

Now copy the public key to the remote machine using Secure Copy:

    scp ~/rsync-key.pub user@remotehost:~

Finally, put the public key into the authorized_keys file on the remote host. SSH into the remote machine using ssh user@remotehost.com and execute:

    mkdir ~/.ssh
    chmod 700 ~/.ssh
    mv ~/rsync-key.pub ~/.ssh/
    cd ~/.ssh/
    touch authorized_keys
    chmod 600 authorized_keys
    cat rsync-key.pub >> authorized_keys

In the remote host, make sure /etc/ssh/sshd_config to include 

    AuthorizedKeysFile  %h/.ssh/authorized_keys

You should now be able to SSH into the remote machine without being asked for a password. Give it a try by closing your previous SSH session and creating another one by typing `ssh -i ~/rsync-key user@remotehost`



limit IP address to access
=========================================
 * In many web pages, multiple ListenAddress ip  should be enough, but it fails on my Ubuntu Dapper. To force IPv4 only, add AddressFamily inet before listening address
 * In my case, I need to edit /etc/hosts.deny and /etc/hosts.allow, not touching /etc/ssh/sshd_config

# in /etc/hosts/deby:
sshd: ALL

# in /etc/hosts.allow:
sshd: 192.168.1.5, 192.168.1.17

ssh reverse tunneling
===================================
What is the usage for reverse tunneling?

Let say I have my server open ssh port to public, which means remote host from the Internet can access to my server through ssh. Another side, my friend’s machine do not open ssh port to public or his machine is behind the firewall.

With this condition, my friend can access my server, but I can’t login to his machine with conventional way. But, with ssh reverse tunneling, I can access to his machine.

How?
My friend's side need to create a reverse tunnel,

 1. He create an user account for me as mysurface, uses useradd
 2. Set a default password for mysurface user account, uses passwd
 3. Setup ssh reverse tunnel

At the firewalled machine (incoming ports only) use:

    $ ssh -nNT -R 2048:localhost:22 remoteclient

At the other end:

    $ ssh -p 2048 localhost

What this does is initiate a connection to localhost and forwards TCP port 22 on remoteclient to TCP port 2048 on local.mydomain.com. The "-n" option tells ssh to associate standard input with /dev/null, "-N" tells ssh to just set up the tunnel and not to prepare a command stream, and "-T" tells ssh not to allocate a pseudo-tty on the remote system. These options are useful because all that is desired is the tunnel and no actual commands will be sent through the tunnel, unlike a normal SSH login session. The "-R" option tells ssh to set up the tunnel as a reverse tunnel.

Don't kick out idle users
--------------------------------
In /etc/ssh/sshd_config, add:

    ClientAliveInterval 0

NOTE: SSH V2 only.
Then restart sshd.

run remote scripts
-------------------------
Create a (passwordless) ssh key and bind it to the command you want to run (by prepending the key with "command=/path/to/your/script" in ~/.ssh/authorized_keys). Then run 
    ssh -i ~/.ssh/key_you_created user@host.

alternatively you can go without keys and just run 

    ssh user@host /path/to/your/script

如何在退出ssh后仍然保持程序运行
------------------------------------

    screen
    run your job
    ctrl+a d
    log out
    log in
    screen -x


test sshd with tcp_wrappers compiled
---------------------------------------
Edit the file,  /etc/hosts.deny

* Add the following:

        sshd: 127.0.0.1

* Attempt to connect to the local sshd server:

        $ ssh localhost

 * You should see the following ssh error message:

        ssh_exchange_identification: Connection closed by remote host

 * remove the line after testing

non-standard port
---------------------
1. either in subversion config: `.subversion/config`:

    [tunnels]
    sshtunnel = ssh -p 12345
            
2. or in ssh config: `.ssh/config`:
                
    Host teckoo.com
    User c2
    Port 12345
    
    Host 192.168.1.7
    HostName another.base.com
    User c2
    Port 12345


scp
-----------------
 * If you need to copy an entire directory full of files to a remote location, use the -r argument

        scp -r /path/to/directory/ user@remotehost:/path/to/destination/

 * If you are transferring logfiles or other highly compressible files, you might benefit from the -C argument. This turns on compression, which, while it will increase the CPU usage during the copy, should also increase the speed in which the file transfers.

 * Use the -l argument to limit how much bandwidth is used. Follow -l with the bandwidth you want to use in kilobits per second. So, to transfer a file and limit it to 256 Kbps use the following command

        scp -l 256 /path/to/file user@remotehost:/path/to/destination

