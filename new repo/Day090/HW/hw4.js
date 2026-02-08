const mypromise = new 
Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success = true
        if (success) {
            resolve("success") ;
        } else{
            reject("Failure") ;
        }
    },5000) ;
});

mypromise
.then(result=>{
    console.log(result) ;
})

.catch(error=>{
    console.error(error) ;
})

.finally(()=>{
    console.log("clean up") ;
}) ;