const generatePromise = new Promise((resolve, reject) => {
    const students = ["luke", "alex", "nico", "niko", "dato", "gio"];
    const randomName = students[Math.floor(Math.random() * students.length)];

    randomName.length < 6 ?
    reject(randomName) :
    resolve(randomName);
});
generatepromise()
    .then(
    (res) => {
        console.log(res)
    },
    (rej) => {
        console.log(rej)
    }
);
