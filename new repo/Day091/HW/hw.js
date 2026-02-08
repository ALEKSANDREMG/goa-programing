const promise1 = new 
Promise((resolve)=>{
    setTimeout(()=>{
        resolve("first success") ;
    },2000) ;
}) ;

const promise2 = new 
Promise((resolve)=>{
    setTimeout(()=>{
        resolve("second success") ;
    },1000) ;
}) ;

const promise3 = new 
Promise((resolve)=>{
    setTimeout(()=>{
        resolve("third success") ;
    },3000) ;
}) ;

Promise.all([promise1, promise2, promise3])
.then(result=>{
    console.log(result) ;
}) ;