---
layout: post
title: "Jupyther"
excerpt: "Jupterhub, Jupyter Notebook"
categories: [knowledge, machine_learning]
tags: [machine_learning]
---

Most info is from 
 * [https://github.com/jupyterhub/jupyterhub/wiki/Installation-of-Jupyterhub-on-remote-server]()

 * [https://jupyterhub.readthedocs.org]()

 * https://letsencrypt.org/

 * https://certbot.eff.org/

 * http://jhubdocs.readthedocs.io/en/latest/oauthenticator/README.html

 * https://github.com/jupyterhub/jupyterhub/wiki/Run-jupyterhub-as-a-system-service
   # daemon service scripts

add /home/share/anaconda3/bin to the path .bashrc

    export PATH=/home/share/anaconda3/bin:.:$PATH

    sudo apt-get install npm nodejs-legacy
    npm install -g configurable-http-proxy
    pip install jupyterhub
    pip install --upgrade notebook

Test Jupyterhub default configuration

    jupyterhub --no-ssl
    # use w3m to test the page
    w3m http://localhost:8000

    openssl req ­-x509 ­-nodes ­-days 365 ­-newkey rsa:2048
        ­-keyout base_key.key
        -out base_cert.pem

sudo env "PATH=$PATH" jupyterhub
#or create a one-liner mysudo command:
sudo -E env "PATH=$PATH" "$@"


jupyterhub --ip 192.168.1.7 --port 443 --ssl-key server.key --ssl-cert
server.cert

# generate authentication token
openssl rand -hex 32

sudo setcap 'cap_net_bind_service=+ep' `which node`

sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot 

sudo certbot certonly --webroot -w /home/share/conf/jh -d teckoo.ddns.net


 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/teckoo.ddns.net/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/teckoo.ddns.net/privkey.pem
   Your cert will expire on 2018-03-25. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"

Verify it from 1. localhost, 2. then from a local LAN host, 3. remote external host. 

If it works on localhost, but not from LAN, it can be a firewall problem. Try 'sudo ufw disable', or 'ufw allow 80'

sudo systemctl daemon-reload and sudo systemctl <start|stop|status> jupyterhub

or 

sudo /etc/init.d/jupyterhub <start|stop|restart|status>


== Google colab ==
You can upload Jypyter notebooks, and DATA. 

from command line, type: 
  
    jupyter notebook
    # if it fails to run, try
    conda install jupyter notebook

## Resources ##
Kaggle
Colab Google
Keras

https://js.tensorflow.org/
https://playground.tensorflow.org
