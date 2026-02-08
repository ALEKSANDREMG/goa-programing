const mypromise = new 
Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("წარმატებულია") ;
    } ,5000) ;
}) ;

mypromise
.then(result =>{
    console.log(result);
})

.catch(error =>{
    console.error(error);
}) ;