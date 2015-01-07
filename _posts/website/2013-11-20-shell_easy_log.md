---
layout: post
title: "log in shell scripts"
excerpt: "set trap in shell level for log files"
categories: [blog, website]
tags: [website]
---

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

in setenv.sh

    if [ $VERBOSE -ne 0 ]; then
      if [ -z "${RT_SCRIPT_LOGDIR}" ]; then
        RT_SCRIPT_LOGDIR="${APP_LOG_DIR}/$(basename "$0").$(date
        +"%Y%m%d_%H%M%S").log"
      fi
      startLogging "${RT_SCRIPT_LOGDIR}"
    fi

in a real calling script
    BASEDIR=$(cd $(dirname $0); pwd)

    # pull in common shell functions
    . $(dirname "$0")/shell_functions.sh

    # stop logging on exit
    trap "stopLogging" EXIT

    . $(dirname "$0"/setenv.sh




