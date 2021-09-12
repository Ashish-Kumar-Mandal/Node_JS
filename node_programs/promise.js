/*
Promise.all
Promise.allSettled
Promise.race
*/

let data = Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('2 seconds')
        },2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('1 seconds')
        },1000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('3 seconds')
        },3000)
    })
])

data.then((item)=>{
    console.warn('Then block: ',item)
}).catch((err)=>{
    console.warn('Catch block: ',err)
})



// let data = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(`1 seconds`)
//     },1000)
// })

// data.then((item)=>{
//     throw new Error(`User generated error`)
//     console.log('Then block: ',item)
// }).catch((err)=>{
//     console.log('Catch block: ',err)
// })