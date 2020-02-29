const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1); //Pending => resolved/fulfilled
        reject(new Error("Error Message")) //Pending => rejected
    }, 2000)
});

p.then((result)=>{
    console.log(result)
}).catch(err=>{
    console.log(err.message)
})