console.log("Before");

// getUser(1)
// .then( user => getRepo(user.GitHub))
// .then( repo => getCommits(repo[0]))
// .then( commits => console.log(commits))
// .catch( err => console.log('Error', err.message));

//Async and Await method
async function displayCommits() {
    try{
        const user = await getUser(1);
        const repo = await getRepo(user.GitHub);
        const commits = await getCommits(repo[0]);
        console.log(commits)
    }catch(err){ //async and await does't have catch so we use try catch
        console.log("Error",err)
    }
}

displayCommits();

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
            // reject("Error While getting repo")
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