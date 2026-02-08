const MyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const myNum = Math.round(Math.random() * 9);
        if (myNum === 0) {
            resolve("ოპერაცია წარმატებული იყო");
        } else {
            reject("ოპერაცია არაწარმატებული იყო");
        }
    }, 5000);
});

console.log(MyPromise)
    