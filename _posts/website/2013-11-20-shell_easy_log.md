---
layout: post
title: "log in shell scripts"
excerpt: "set trap in shell level for log files"
categories: [blog, website]
tags: [website]
---

In some scenarios, we need to store shell script console output to a log file.
In log4j, we can define two appenders, one for ConsoleAppender and the other
one for FileAppender. In console, we can use FIFO (named pipe) to redirect the
output to log files. Unfortunately, in `sh/ksh`, we have to do it manually.  

Here is one implementation:

Step 1: define a utility shell function

shell_functions.sh

    startLogging(){
      if [ -p "/tmp/$$.fifo" ]; then
        then 1
      fi

      logginTo=$1
      mkfifo /tmp/$$.fifo
      exec 3>&1 4>&2

      tee "$1" < /tmp/$$.fifo >&3 & tpid=$!

      exec > /tmp/$$.fifo 2>&1

      echo "Logging started to $1" >&2
    }

    stopLogging(){
      if [ -p "/tmp/$$.fifo" ]; then
        echo "logfile written to ${loggingTo}" >&2
        exec 1>&3 3>&- 2>&4 4>&-
        wait $tpid 
        rm /tmp/$$.fifo
      fi
    }

Step 2: You can put it in a central place for all caller shell scripts. 

in setenv.sh

    if [ $VERBOSE -ne 0 ]; then
      if [ -z "${RT_SCRIPT_LOGDIR}" ]; then
        RT_SCRIPT_LOGDIR="${APP_LOG_DIR}/$(basename "$0").$(date
        +"%Y%m%d_%H%M%S").log"
      fi
      startLogging "${RT_SCRIPT_LOGDIR}"
    fi

Step 3: then include both utility script and common 'setenv.sh' in execution
script.

in a real calling script

    BASEDIR=$(cd $(dirname $0); pwd)

    # pull in common shell functions
    . $(dirname "$0")/shell_functions.sh

    # stop logging on exit
    trap "stopLogging" EXIT

    . $(dirname "$0"/setenv.sh


