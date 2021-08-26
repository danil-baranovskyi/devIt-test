# create a folder "project" 

--> mkdir project

#initialize 

--> path/project git init

# we have ssh key,  (how i understood that it is = git@example.com:example/test.git)  so, we can easy get access to repozitory

--> path/project git remote add origin <ssh key from GitHub or other>

# download project

# 'origin' its name of url to repozitory we work, its shorter than long url adress'


# in my projects i didnt use git, and just sent my files to GitHub and last one call branch 'main', in default # git use master, how i understood, its not rule but common feature

--> path/project git pull origin <branch name>

# change a branch
# i understend that we already have a 'dev' branch, if not =  git checkout -b dev of = git branch dev ... git checkout dev

--> path/project git checkout dev

# for make sure
# something like that: master
		       * dev
			stage
			release

--> path/project git branch

# create our file

--> path/project nano readme.md

# opened nano, we wrote all we needed, closed nano

# add changes
# we can also use 'add .' for save all changes

--> path/project git add readme.md

# check that all right

--> path/project git status

# something like that
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   readme.md

# make a commit

--> path/project git commit -m "add readme"

# for make sure
# info about all our commits

--> path/project git log

# push

--> path/project git push origin dev



