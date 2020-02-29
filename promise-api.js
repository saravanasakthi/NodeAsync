// const p = Promise.resolve({id: 1});

// //Rejecting promise
// const p1 = Promise.reject("rejecting promise");
// p.then(result => console.log(result));

// p1.catch(err => console.log(err))


const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async Operation 1");
        resolve(1)
        // reject(new Error('Something Failed...')); //any one of the promise is rejected the final promise from promise.all is considered rejected
    }, 2000)
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async Operation 2");
        resolve(2);
    }, 5000)
});

//Return if all the promise is completed
// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(err => console.log(err.message))

//return if any one of the promise is completed
Promise.race([p1, p2])
.then(result => console.log(result))
.catch(err => console.log(err.message))