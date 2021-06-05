// function myPromise() {
//     return Promise.resolve('test value')
// }
// console.log(myPromise());


/*
async function test() {
    return 'test'
}
// console.log(test());
test().then(v => alert(v))
*/

/*
let p1 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'test value')
})

async function myAsyncFunc() {
    // p1.then(v => alert(v))
    let v = await p1
    console.log(v);
}

myAsyncFunc()
*/

/*
async function featcData() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')

        let data = await res.json()
        let name = data.map(u => u.name)
        console.log(name);
    } catch(e) {
        console.log(e.message);
    }
}

featcData()
*/

/*
let promises = [Promise.resolve(1) ,Promise.resolve(2), Promise.resolve(3)]

async function promiseAll() {
    let result = await Promise.all(promises)
    console.log(result);
}

promiseAll()
*/