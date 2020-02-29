console.log("Before");
// getUser(1, (user)=> {
//     console.log(user);
//     getRepo(user.GitHub, (repos)=>{
//         getCommits(repos[0], (commits)=>{
//             console.log(commits)
//         })
//     })
// });

getUser(1)
.then( user => getRepo(user.GitHub))
.then( repo => getCommits(repo[0]))
.then( commits => console.log(commits))
.catch( err => console.log('Error', err.message));

console.log("After");

function getUser(id){
    return new Promise((resolve, reject)=>{
        //Kickback async work
        setTimeout(()=>{
            console.log("Calling Get User...");
            resolve({id:id, GitHub:"Saravanasakthi"})
        }, 2000);   
    })    
}

function getRepo(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("calling Getrepo...");
            resolve(["repo1","repo2","repo3"]);
        }, 2000);
    })         
}

function getCommits(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Calling Commits...'+repo);
            resolve(['commit'])
        }, 2000)
    })    
}