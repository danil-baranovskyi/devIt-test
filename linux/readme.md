# created a dir in home/desktop
cd Desktop
mkdir some

# created a structure like in the task

--> mkdir var
--> cd var
--> mkdir www
--> mkdir logs
--> cd www
--> mkdir html
--> cd html
--> touch index.html
--> touch 404.html
--> touch .htaccess

### FIRST TASK <-START->

# go to html dir, cd .., cd ...\html

path\html--> ls

### FIRST TASK <-END->
------------
### SECONDTASK <-START->

path\logs--> grep -n "404" access.log

### SECOND TASK <-END->
------------
### THIRD TASK <-START->
# i am not strong in linux, so i write command on separate lines

path\html--> cp 404.html 403.html
path\html--> sed -i 's/404/403/g' 403.html

### THIRD TASK <-END->
------------
### FOURTH TASK <-START->

1. current user already have rights for writing and reading
2. group : sudo chmod g+r index html && sudo chown www-data index.html
3. other : sudo chmod o+- index.html

### FOURTH TASK <-END->
------------
### FIFTH TASK <-START->

--> ln -s access.log accesslog-link
--> cat accesslog-link
bla bla
bla bla
(file contents)

### FIFTH TASK <-END->
------------
### SIXTH TASK <-START->
# im not sure that i understood this task
path/var--> ls

### SIXTH TASK <-END->
------------
### SEVENTH TASK <-START->

path/html--> touch 503.html && gedit 503.html
# then we just fill cerrently created file as we need

### SEVENTH TASK <-END->