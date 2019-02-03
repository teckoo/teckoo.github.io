---
layout: post
title: "Search related topics in Linux"
categories: [knowledge, linux]
tags: [linux]
---

## find

### find and zip files

To zip log files older than 5 days

    find ${LOG_DIR} -mtime +4 -exec gzip {} + 2>/dev/null

find and delete files (to delete folders, remove -type f)

    find ${LOG_DIR} -mtime +30 -delete -type f

To exclude some folders, do this:

    find . -name '.svn' -prune -o -print | grep message
    or 
    find -not -iwholename '*.svn' -name 'messages.*' -exec grep -Iw uint {} + \;
    or
    find . -not -iwholename '*.svn*'
    or 
    find . -path '*/.svn*' -prune -o -print
    or 
    find . -name .svn -a -type d -prune -o -print

Or, install a Perl module `ack-grep`, not `ack`

    sudo aptitude install ack-grep

## grep

### search patterns in certain extension
Under Linux, the format is more flexible, e.g. 

    grep your_pattern -r --include="*.py"
    
Mac OS is more restricted: 
1. quote is required in some shells e.g. zsh. 
2. '-e' and '.' are required 

    grep -e your_pattern -r . --include="*.py"

### 使用grep恢复被删文件内容

`sudo rm -rf /*` 大概是最令人兴奋的Linux命令了. 有一回我的一个同事升级新机器, 旧的不要了, 
我就建议在旧机器运行一下这个命令. 有三个同事都跑来看是什么结果. 呵呵. 

的确`rm`实在是招好多用户不待见, 因为恢复文件实在太难. 
如果实在有什么重要文件要恢复的话. 可以试一下用grep对物理硬盘进行搜索. 

    grep -a -B 50 -A 60 'some string in the file' /dev/sda1 > results.txt

-e PATTERN, --regexp=PATTERN, use PATTERN as the pattern. This can be used to specify multiple search patterns

-v, --invert-match, invert the sense of matching, to select non-match lines

-m NUM, --max-count=NUM, stop reading a file after NUM matching lines

-A NUM, --after-context=NUM, print NUM lines of trailing context after matching lines

-o, match words only

Match multiple strings
-------------------------

This command greps four operations and prints out parameters

    op="create\|retrieve\|select\|add"
    grep "$op" *webService.log | awk '{print $1, $2, $3, $6}'
    
## cut

### split only once to get the left/right value
Q: S3 bucket/key format is 'bucket_name/path/to/fn', we need to remove the bucket name and retrieve the key value.
A: require no leading '/' in the string, in shell, 

    value=bucket_name/path/to/fn
    key=`echo $value | cut -d'/' -f 2-`
    echo $key
    $ expect $key to be 'path/to/fn'

