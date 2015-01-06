---
layout: post
title: "Version Control"
excerpt: "cvs, svn, git commands"
categories: [knowledge, development]
tags: [development]
---

[相关文章](/blog/programmer/version-control-svn-git.html)

![](/media/content/goodcomments.jpg)

Git
======
Basics
---------
Staging area: between working tree and git repo, buffer the changes you want to
commit to repo.

### Create a repo:

    mkdir mysite
    cd mysite
    git init 
    git add .
    git commit -m "initialize the project to git"

### Add a file, commit the change, and display the log

    git add my_first_file.txt
    git add -i # interactive mode
            -p # patch mode

    git commit -m "add my first page"
    git commit -m "add my first page" -a 
    # -a means take the most current version of the file in the working tree

    git status # check status 
    git log
    git log --pretty=oneline

### list all files in a repo 
  
    git ls-tree -r master --name-only

### check logs
    git log
    git log -10 # last 10 entries
    git log <commit hash>
    git log --since="5 days"
    git log --before="5 hours" -l # list changes older than 5 hours
    git log hash_1..hash_2
    git log has_id..HEAD or 
    git log has_id..

    git log --pretty=format:"%h %s" 1.0..HEAD
    # %h is hash, %s is the first line of the commit log, the subject
    git log --pretty=oneline

    git log -l HEAD^^^
    ^: acts like a minus one
    ~N: subtracts N from the commit name

### diff files
    
    git diff # compare working area with staging area
    git diff --cached # compare staging area with repo
    git diff HEAD    # compare working area with repo

    git diff --stat 1.0 #prints some statistics against tag 1.0
    # default is HEAD
    
    git blame $file_name
    git blame -L <start>,<end> $file_name
    git blame -L <start>,+10 $file_name # show 10 lines of code
    git blame -L "/<\/body>/",+10 $file_name # support regular expression

    git blame -M $file_name 
    # detect lines that have moved/copied within the same file

### rename/move files

    git mv $source $destination

### Undo commits
    git commit -C HEAD -a --amend
    # -C: use the log message from the commit specified, HEAD
    # -c: launch an editor
    # it can only be done for the last commit

For previous commit to undo, use `git revert`

    git revert -n HEAD
    git reviert -n <hash_name>
    git commit -m "revert 2 commits"
    # you need to explain why you do the revert

If you commit a private information and want to take it back, do `git reset`

    git reset --hard HEAD^ # reset TWO commits
    git reset --soft # stage all the previous commits but not commit them.
    # you still have a chance to modify the previous commit
    # by adding to or taking away from it. 
    
Remote server repository
------------------------
### Create a remote repository
 *  in remote server directly, 

        cd /opt/git
        mkdir $prj_name.git
        cd $prj_name.git
        git init --bare --shared

 * Or, if I want to add an existing git project to a remote server,

        git clone --bare $prj_name /tmp/$prj_name.git
        scp -r /tmp/$prj_name.git $remote_server:$port/opt/git/

 * If the remote repository is setup already, `origin` is the default remote
 repository name, just an alias to the full name 

        git remote add <remote repo> <repo url>
        e.g.
        git remote add origin $remote_server:/opt/git/$prj_name.git
        git push origin master
        git remote add tv tv:/opt/git/${prj_name}.git
        git push tv HEAD

### To checkout a remote git repo
To check out the code via ssh:
  
    git clone $USER@192.168.1.7:/opt/git/$prj_name.git

If ssh is not on default port number, check svn+ssh below to see how to setup
`.ssh/config`.

### To commit changes to a remote repo

    git push origin master
    git push --dry-run # see what changes will be pushed
    
### List remote repositories

    git remote -v

    or

    git branch --remote --list
    git branch -r  # show branches in the remote repository

    or

    git ls-remote --heads origin

### check remote repo URL

    git remote show origin
    or
    git config --get remote.origin.url

### To update changes to a remote branch

    git fetch <remote repo> 
    # update the changes made in remote repo in your local repo, 
    # it doesn't merge into not local working branch
    # one usage:
    # git fetch
    # git diff ...origin

    git pull <remote repo> 
    # fetch changes and merge into local branch
    # so it is actually a `git fetch; git merge`
    typical usage:
    git checkout master
    git fetch
    git diff origin/master
    git pull --rebase origin master
    or git rebase origin

### delete a remote repo from current local working copy
    git remote rm origin
    git remote show

### add repository to git hub
1. create a new repository in github
2. push an existing repository to github

        git remote add github https://github.com/teckoo/org_directory.git
        git push -u github master


Branches
------------
### create a branch:

    # create a branch form the default 'master' branch in Git
    git branch $branch_name master
    # create a branch from tag
    git branch $branch_name 1.0

### switch to a branch

    git checkout $branch_name

### create a branch and check it out

    git checkout -b $branch_name
    # create a branch from the master branch
    git checkout -b $branch_name master 

### merge a branch
`--squash`: take all the commits and squash them into one commit

    git merge --squash $branch_name

### rebase, a replay 'merge' from another branch. 

    # stay in the place need to be merged
    # e.g. merge RB_1.0 to master branch
    git rebase RB_1.0

### delete a branch

    git branch -d $branch_name
    
rename a branch

    git branch -m $branch_new_name $old_name


Tags
--------
 * Mark release/milestones with tags
 * restriction: Do NOT use `space, ~, ^, :, ?, *, [` in tag names

### list all tags
    
    git tag

### Tag a version to a specific branch

    git tag $ver $branch_name

Submodule
----------
It works similar to `svn:external`

    git submodule
    git submodule add $remote_mod_url $local_mod_name
    git submodule init $local_mod_name
    git submodule update $local_mod_name
    git add $local_mod_name
    git commit -m "update to track in submodule $local_mod_name"


Archive
---------
    git archive --format=tar \
                --prefix=$branch_name/ $ver \
                | gzip > my_release-$ver.tar.gz
    or
    git archive --format=zip \
                --prefix=$branch_name/ $ver \
                > my_release-$ver.zip


## Rebase
git rebase saves stuff from your current branch that isn't in the upstream
branch to a temporary area. Your branch is now the same as before you started
your changes. So, git pull -rebase will pull down the remote changes, rewind
your local branch, replay your changes over the top of your current branch one
by one until you're up-to-date.

    git rebase
    git rebase --continue # tell Git the conflict is resolved
    [--skip|--abort]
    git rebase --onto master your_branch # TODO: explain here

    git rebase -i HEAD~3 # reordering commits
    # to squash multiple commits into one,
    # change 'pick' to 'squash'

    # to break one commit into multiple commits
    # change 'pick' to 'edit', save and exit to start the rebase
    # run `git log -1`, then you can use `git reset HEAD^ to make more changes.
    # git commit -m "message 1" -a
    # git commit -m "message 2" -a
    # git rebase --continue

## Reflog
    git reflog # list commits
    git branch reflog-restored $commit_name
    git checkout reflog-restored

## Bisecting
    git bisect start
    git bisect bad
    git bisect good $tag_name
    git bisect reset # back to master branch
    git bisect visualize
    git bisect run $script

From SVN path
--------------

    svn checkout url -- git clone url 
    svn update       -- git pull      
    svn commit    --  git commit -a

    svn status  --  git status  
    svn log | less  --  git log 
    svn diff | less  --  git diff  
    svn diff -rrev path --   git diff rev path   
    patch -p0   --  git apply   

    svn list url -- git show rev:path/to/directory 
    svn list http://example.com/svn/branches/
      -- git branch
    svn list http://example.com/svn/tags/
      -- git tag -l
    svn import file://repo--  git add .  
    svnadmin create repo  --  git init      

    svn merge -c rev url -- git cherry-pick rev
    svn merge -r 20:HEAD http://example.com/svn/branches/branch
      -- git merge branch

    svn copy http://example.com/svn/trunk \
      http://example.com/svn/tags/name
      -- git tag -a name
    svn copy http://example.com/svn/trunk \
      http://example.com/svn/branches/branch      
      -- git branch branch 

    svn revert path -- git checkout path   
    svn blame file  -- git blame file 
    svn switch url  -- git checkout file|dir

git bash completion
--------------------
In user home folder, do

    mkdir .bash_completion.d
    cp /usr/share/git/completion/git-completion.bash .bash_completion.d

To test, `. .bash_completion.d/git-completion.bash 

to show branch name

    PS1='[\u@\h \W$(__git_ps1 " (%s)")]\$ '

Undo things
-------------
 1. undo staged, but not commit yet files

        git reset HEAD file

        or

        git reset file
        git reset .

        
Compacting, garbage collection
---------------------------------------
    git gc # no change in history, optimize the storage
    git gc --aggressive # if you want reduce size more


show global variables
-----------------------
    git config --global --list
    git config --global user.name "C2 Programmer"
    git config --global user.email "c2@teckoo.com"
    git config --global color.ui "auto"
    git config --global alias.ci "commit"
    git config --global core.excludesfile ~/.gitignore

ignore files: edit .git/info/exclude

In global level: `vi ~/.gitignore`

    # use wildcards
    *~
    *.pyc
    *.swp
    # can also ignore all folders and files under it
    tmp/**/*

Resources
-------------
 * [Git official site](http://git-scm.com/)
 * [Git reference](http://gitref.org/)
 * [Illustrated tutorial](https://www.atlassian.com/git)

Subversion 
================

## How to setup an ignore list ##
 1. edit multiple entries at a time: `svn propedit svn:ignore . `
 1. set properties from commandline: `svn propset svn:ignore "*.class" . `
 1. set from a file: `svn propset svn:ignore -F ../dining3/.cvsignore .`

## Switch to Another Repository ##
You can then switch a current work directory to the new respository:

    svn switch --relocate url-of-old-repos url-of-new-repos

Ref: http://svnbook.red-bean.com/en/1.1/re27.html

## 查看状态 Reviewing Changes -  svn status ##
To see what files you have changed or added to your checked out work, use the update command:

    svn status 

If you want to compare current working directory with remote repository, run 

    svn st -u


If you want ot view changes

    svn log -r r1:r2 | less

To get a list of the releases for a project.

    svn list http://192.168.0.4/svn/repos/prj1/tags

Then to check out a release you would type:

    svn list http://192.168.0.4/svn/repos/prj1/tags/0.1.0 


## Branches and Tags ##
### merge changes from trunk to branches ###
Suppose I made some changes in trunk 'edit.html' at revision 62, I need to move it to prod branch 'cms-social', here is what I do

    pwd
    c2@local1:~/workspace/cms-social/channel_blog/templates/channel_blog

    svn diff -c 62 https://c2@remote.teckoo.com/svn/c2/cmsite/trunk/channel_blog/templates/channel_blog/edit.html

I should see some changes between r61 and r62, then do

    svn merge -c 62 $remote/edit.html
    U    edit.html

    or 
    svn merge -r 61:62 $remote/edit.html

try before real action:
    
    #suppose you're in trunk, want to merge some change in branch 'test'
    svn merge --dry-run -r 1793:1867 $remote/myfile.ext

the simplest step: merge all changes from another branch

    svn merge $remote

Now the change has been made in local branch, I need to commit to SVN repository, 

    svn commit

Then in prod server, I can do ` svn up ` to fetch the latest change

### fix conflicts 
After you do a merge, if there is a conflict, there will be three files in your folder, 

    post.html
    post.html.mine
    post.html.merge-left.r259
    post.html.merge-right.r260

1. fix conflict in `post.html`, 
   如果不想保留你的修改, 可以直接用一个版本覆盖原文件 `cp post.html.r259 post.html`
1. cp post.html post.html.merge-right.r260
1. rm post.html.merge-left.r259
1. svn resolved post.html
1. svn commit post.html -m "your reasons here"

### fix tree conflict
这个挺麻烦, 简单的办法是

    svn resolve --accept working your_folder/files

但你可能丢失一个tree's change history.     

### create a branch and work on it ###

    $ svn copy https://c2@remote.mis.teckoo.com/svn/c2/cmsite/trunk \
               https://c2@remote.mis.teckoo.com/svn/c2/cmsite/branches/cms-only \
          -m "Create branch for CMS only."
    Committed revision 353.
    $ svn switch http://svn.example.com/repos/calc/branches/newbranch
    At revision 353.


### copy a directory to a branch ###

    svn copy channel_blog https://c2@remote.mis.teckoo.com/svn/c2/cmsite/branches/cms-social


### Tagging Projects or Creating Project Specific Versions ###
To create interim project releases, you must create "Tags" which identify a specify version of a project. This is done by making a virtual copy of a project in the tags directory. For example:

    svn copy https://$svn_host/repos/$prj_name/trunk https://$svn_host/repos/$prj_name/tags/0.1.0 -m "Tagging the 0.1.0 release of the project" 

or from a revision

    svn copy -r 1 $REPO/trunk $REPO/branches/somebranch \
      -m "Creating branch somebranch from revision 1 of trunk" 

## move data from one repository to another ##
### export/import ###
This way you get a clean copy without any history

    svn export path/to/your_old_repo/mydir ./mydir
    svn import ./mydir path/to/your_new_repo/$prj_name

### dump/filter, keep history/tag/branches ###

    svnadmin dump /svn/old_repos > ./repository.dump
    svndumpfilter include path/to/docs --drop-empty-revs --renumber-revs --preserve-revprops < ./repository.dump > ./docs_only.dump
    svnadmin load /svn/new_repos < ./docs_only.dump

 * <a href=http://stackoverflow.com/questions/417726/how-to-move-a-single-folder-from-one-subversion-repository-to-another-repository> StackOverflow </a>
 * <a href="http://svnbook.red-bean.com/en/1.6/ch05s03.html" rel="nofollow">Repository Maintenance</a> 
 * <a href="http://msmvps.com/blogs/rexiology/archive/2006/05/03/93203.aspx">a detailed instruction </a>

## Recover deleted files ##
不常用, 记下来省得以后再找

     svn log –verbose | grep -A5 -B5 your_deleted_file.txt
     # find the revision number above
     svn up -r number_found_above your_deleted_file.txt

## Getting a list of projects ##

    svn list --verbose file:///opt/svn/$prj_name/


## Checking Out a Project - svn checkout ##
 * `svn checkout file:///repository_name/$prj_name/trunk $prj_name #note the 'trunk' folder which is under '$prj_name'`
 * `svn checkout https:c2@remote.mis.teckoo.com/svn/proj_repo/trunk $prj_name `

## Add a New Project - svn import ##
Directory structure is like this:

    \$prj_name 
      \branches
      \tags
      \trunk
    
type the following:

    export prj_name=something
    mkdir -p $prj_name/{branches,tags,trunk} 
    svn import $prj_name file:///opt/svn/repository_name/$prj_name -m "First Import" 
    or:
    svn import $prj_name https://$svn_host/$svn_repo_path/$prj_name -m "First Import" 

## svn+ssh setup ##
No special setup required on the server side if openssh server is up running. 
When openssh server is running on non-default port number, client side need to
make a change. 

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

## Apache Setup ##

 * Install package:

       sudo aptitude install libapache2-svn

 * virtual host config:

        <Location /svn>
            DAV svn

            # All repos subdirs of /opt/svn
            # any "/svn/foo" URL will map to a repository /opt/svn/foo
            SVNParentPath /opt/svn

            # how to authenticate a user
            Require valid-user
            AuthType Basic
            AuthName "Subversion repository"
            AuthUserFile /etc/apache2/dav_svn.passwd
            AuthzSVNAccessFile /opt/svn/.svn-policy-file
            Satisfy Any
        </Location>

 * To create a user on the repository use, the following command:

        sudo htpasswd2 -cm /etc/apache2/dav_svn.passwd <username>


If Apache is running by user 'www-data', need to allow it to read/write svn repository

    sudo adduser www-data dev
    sudo chown -R c2:dev /opt/svn/prj_repo
    sudo chmod -R g+w /opt/svn/prj_repo

## Move a repository ##
 1. dump data

        svnadmin dump /path/to/repository > repository-name.dmp

 1. load data 

        cd /path/to/new-repository
        svnadmin create repository-name
        svnadmin load repository-name < repository-name.dmp

## Delete a repository ##
To remove a repository permanently, simplely delete the directory in the file system

    rm -rf /opt/svn/$repo

If need to delete some files or directories, simple do

    svn delete -m "delete files and directories" http://url/to/your_repo/dir/file

## Create a Repository ##
run the following command from local machine.

    svnadmin create /opt/svn/$repo

## create/apply a patch
 * to create a patch: `svn diff -r OLD:NEW> my_saving_world_fix.diff`
 * apply a patch: `patch -p0 -i my_saving_world_fix.diff`
    `-p0` to check all files exist in the folder
    `-i filename` specifies the patch file to apply

资源 
-------------
 * [SVN book](http://svnbook.red-bean.com/) - The online manual
 * [Version Control with Subversion](http://chestofbooks.com/computers/revision-control/subversion-svn/index.html) by Ben Collins-Sussman, Brian W. Fitzpatrick and C. Michael Pilato
 * [Quick sheet](http://www.biostat.umn.edu/~nali/computing/subversion.html) 
 * [Subversion Tips for CVS Users](http://www.onlamp.com/pub/a/onlamp/2004/08/19/subversiontips.html)
 * [Subclipse - Eclipse plugin](http://subclipse.tigris.org/install.html)

CVS
=========
常用命令
------------
    :::console
    Query the updated the files, and update them
    $cvs -nq update #not update, just see the changes

    update most updated files, including new file/directory, removing sticky_tags
    $cvs update -dPA 

    List projects in a repository: 
    cvs -d :ext:c2@oberon.cis.teckoo.com:/usa/c2/usb_c2/cvsroot rls

Tags 简单应用 
--------------
All major releases should be tagged:
    
    cvs tag -b tag-name

To retrieve a tagged version, update your repository by doing:

    cvs update -r tag-name

to switch to the branch, or to switch to the trunk:

    cvs update -A"

