// ------basic asynchronous-----
/*
console.log('i am 1');
setTimeout(() => {
    console.log('i am 2');
}, 3000)

setTimeout(() => {
    console.log('i am 3');
}, 0)

setTimeout(() => {
    console.log('i am 4');
}, 1000)

console.log('i am 5');
*/



// -------store result from asyns function-----
/*
function sayName(name) {
    let result
    setTimeout(() => {
        result = name
        console.log('i have done...');
        console.log(result);
    }, 3000);
    return result
}
// let x = sayName('medul')
// console.log(x);
let b = sayName('medul')
console.log(b);
*/