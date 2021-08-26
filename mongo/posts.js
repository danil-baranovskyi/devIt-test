//commands in shell
/* 

    //preparing
    use posts
    
    // load("D:/posts.js")
    // db.post.insert(post("How to get a job in DevIt", "The first task, you need complete test task and introduce your resume","Krutoi TeamLead",1000,0))
    // db.post.insert(post("post1111111", "Content of post 11111111","Krutoi TeamLead",1000,0))
    // db.post.insert(post("post2222222", "Content of post 2222222","Krutoi TeamLead",1000,0))
    // db.post.insert(post("post333333", "Content of post 3333333","Krutoi TeamLead",1000,0))
    // db.post.insert(post("post444444444", "Content of post 1444444444","Krutoi TeamLead",1000,0))
    // db.post.insert(post("pos55555", "Content of post 555555","Krutoi TeamLead",1000,0))

    //task1
    // db.post.find().skip(5).limit(5).pretty()

    //task2
    // db.post.find({"properties.like": {$gt : 100}}).pretty()

    //task3
    // already done 


    //task4

*/
//

//for including new posts
function post(title, content, author, like, dislike){
    return {
        "properties":{
            "title" : title,
            "content" : content,
            "author" : author,
            "like" : like,
            "dislike" : dislike,
        }
    }
}


// cursor = db.coll_name.find()
function taskFourth(cursor, field){
    let likeSum = 0;
    cursor.forEach(function(obj){
        print(obj.properties[field]);
        likeSum += obj.properties.like;
    })

    print(likeSum);
}

// load("file)
// db.post.insert(post("post66666666", "Content of post 166666666","Krutoi TeamLead",1000,0));