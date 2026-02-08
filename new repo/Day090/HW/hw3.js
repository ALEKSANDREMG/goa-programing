const async =new 
Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success = true ;
        if (success) {
            resolve("success");
        } else{
            reject("failure");
        }
    },1000);
}) ;

async
.then(result=>{
    console.log(result) ;
},errormessege=>{
    console.error(errormessege) ;
}) ;