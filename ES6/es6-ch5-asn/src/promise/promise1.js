// simple promise
/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'one')
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'two')
})
// console.log(p1);
// console.log(p2);

p1.then((v) => {
    console.log(v);
}).catch((e) =>{
    console.log(e);
}) 

p2.then((v) => {
    console.log(v);
}).catch((e) =>{
    console.log(e);
})
*/

//
/* 
function getIphone(passed) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(passed) {
                resolve('I have got Iphone')
            } else {
                reject(new Error('I have failed'))
            }
        }, 2000)
    })
}

// console.log(getIphone(false));

getIphone(false)
    .then((res) => {
        console.log(res);
    })
    .catch((e) =>{
        console.log(e.message);
    })
*/