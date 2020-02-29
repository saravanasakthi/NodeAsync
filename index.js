console.log("Before");
getUser(1, (user)=> {
    console.log(user);
    getRepo(user.GitHub, (repos)=>{
        getCommits(repos[0], (commits)=>{
            console.log(commits)
        })
    })
});

//Named function rescue

// getUser(1, getRepo1);

// console.log("After");

// function getRepo1(user){
//     console.log("User ",user)
//     getRepo(user.GitHub, getCommits)
// } 

// function getCommits(repos){
//     getCommits(repos, displayCommits)
// }

// function displayCommits(commits){
//     console.log(commits)
// }

function getUser(id, callback){
    setTimeout(()=>{
        console.log("Async ", callback);
        callback({id:id, GitHub:"Saravanasakthi"})
    }, 2000);
}

function getRepo(username, cb){
    setTimeout(()=>{
        console.log("calling github Api "+cb);
        cb(["repo1","repo2","repo3"]);
    }, 2000);     
}

function getCommits(repo, callback){
    setTimeout(()=>{
        console.log('Calling Github Api...');
        callback(['commit'])
    })
}