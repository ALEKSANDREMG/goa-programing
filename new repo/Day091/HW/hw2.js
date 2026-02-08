function add(x,y){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(x+y) ;
        },3000) ;
    }) ;
}

function multiply(x,y){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(x*y) ;
        },4000) ;
    }) ;
}

function square(x,y){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(x**y) ;
        },3000) ;
    }) ;
}

Promise.all(
    [add(22,22),multiply(22,22),square(22,22)]
)

.then(result=>{
    console.log(result) ;
}) ;