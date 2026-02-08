const MyPromise= new
Promise((resolve, reject) => {
    setTimeout(() => {
        let moswavlebi = ['alexsandre', 'dato', 'giorgi', 'luka', 'nika'];
        let random = moswavlebi[Math.floor(Math.random() * moswavlebi.length)];
        console.log(random);
        if (random.length > 5) {
            resolve('success');

        } else {
            reject('failure');
        }
    }, 5000);
});
MyPromise
.then((result) =>
console.log(result))
.catch((error) =>
console.log(error));