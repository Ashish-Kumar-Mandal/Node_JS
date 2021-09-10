const a = 200;
let b = 0;

const waitingData = new Promise((resolve, reject) => {
    setTimeout(() =>{
        b = 500;
        resolve(b);
    },2000)
})

waitingData.then((data) =>{
    b = data;
    console.log(a+b);
})
