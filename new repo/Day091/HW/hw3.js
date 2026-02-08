async function first(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("success") ;
        },2000) ;
    }) ;
}

async function second(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("congrants") ;
        },2000) ;
    }) ;
}

async function third(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("True") ;
        },2000) ;
    }) ;
}

async function runTasksSequentially(){
    const result1 = await first() ;
    console.log(result1) ;
    const result2 = await second() ;
    console.log(result2) ;
    const result3 = await third() ;
    console.log(result3) ;
} 
runTasksSequentially() ;

