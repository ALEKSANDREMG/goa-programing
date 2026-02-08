const mypromise = new 
Promise((resolve,reject)=>{
    resolve(22);
}) ;

mypromise
.then(value=>{
    return value*3 ;
})

.then(value=>{
    return value-4 ;
})

.then(result=>{
    console.log(result) ;
});