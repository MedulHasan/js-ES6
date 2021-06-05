import '../styles/index.scss'

// -----------------string-----------------

/*
var str = `Hi there,
how are you

What are you doing now`
console.log(str);
*/


/*
var age = 23
var name = 'Medul'

console.log(`My name is ${name} and i am ${age} years  old. i am ${ (age < 18) ? 'not ' : ''}adult`);

console.log(name.padStart(20)); //added a splace/any symble in start
console.log(name.padEnd(20, '+')); //added a splace/any symble in end
console.log('A'.repeat(20)); //repear multiple time
*/



// ------------ var vs let vs const ------------

/*
let a = 10 // if you declear a variable with 'let' then you will change the variable value in future
a = 100
console.log(a);

const x = 20 // if you declear a variable with 'const' then you will not change the variable value in future
// x = 200 //this is wrong
 */



// -----------------arrow function--------------

/*
// function decleration
function add(a, b) {
    return a + b
}
console.log(add(2, 3));

// function experesstion
let abc = function(a, b) {
    return a + b
}
*/


// arrow function
/*
let sqr = x => x * x //if we use single parameter then we will not use anu '()' parenthesis

console.log(sqr(2));

let x = (a, b) => a + b //single line arrow function, if we have a one line statement then can not use the return keyword

console.log(x(5, 5));

let add = (a, b) => {
    return a + b
}
let result = add(2, 3)
console.log(result);
*/





// -------------arrow function and this---------
/*
function testme() {
    console.log(this);
}
testme.call({})
*/

/*
// ----arrow function with this----
let obj = {
    name: 'medul',
    print: function () {
        let x = (msg) => {
            let m = msg
            console.log(this);
            console.log(`My name is ${this.name} and i give a massage ${m}`);
        }
        x('send meaasge')

        setTimeout(() => {
            alert(`hi ${this.name}`)
        }, 1000)
    }
}
obj.print()
*/


// function expresstion
/*
let obj = {
    name: 'medul hasan',
    print: function() {
        setTimeout(function() {
            console.log(`hello, ${this.name}`);
        }.bind(this), 1000)
    }
}
obj.print()
*/



// ----------default parameter----------
/*
function sqr(n=1) {
    return n * n
}
console.log(sqr(2));
*/

/*
function greet(name='medul hasan', msg='hello') {
    console.log(name.length);
    console.log(`${msg}! ${name}`);
}
greet('medul', 'hello')
*/


// ------custom iteratable object---------
/*
let obj = {
    start: 1,
    end: 10,
    [Symbol.iterator]: function() {
        let currentValue  = this.start
        const self = this
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? '' : currentValue++
                }
            }
        }
    }
}

// for(let v of obj) {
//     console.log(v);
// }

let iterate = obj[Symbol.iterator]()
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
*/


// -------rest and spread operator----------
 /*
function add() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}

console.log(add(1, 2, 3, 4, 5));
*/

/*
// rest
function add(...rest) {
    return rest.reduce((a, b) => a + b)
}
console.log(add(1, 2, 3, 4, 5, 6));
*/

/*
// spread
let arr = [1, 2, 3, 4]
console.log(...arr)
*/


// --------enhance object---------
/*
// ----old object decleration
let a = 10, b = 20
let obj = {
    a: a,
    b:b,
    print: function() {
        console.log(this);
    }
}
obj.print()
*/

/*
// ----es6 object decleration
let obj2 = {
    a,
    b,
    print() {
        console.log(this);
    }
}
obj2.print()
*/

// ----------------destructuring-------
// ------object destructuring
/*
let obj = {
    name: 'medul',
    email: 'medul.cse@gmail.com',
    address: {
        city: 'dhaka',
        country: 'bd'
    }
}
// console.log(obj.name, obj.email); //old version object call
let { name, email, address: {city, country} } = obj
console.log(name, email, city, country)
*/

/*
// ------array destructuring
let arr = [1, 2, 3, 4, 5]

let [a, b, , , e] = arr
console.log(a, b, e);
*/

// --------object fromEntries---------
/*
// object to array
let obj = {
    a: 10,
    b: 20
}
console.log(Object.entries(obj));
*/

/*
// array to object
let arr = [
    ['a', 10],
    ['b', 20]
]
console.log(Object.fromEntries(arr));
*/

// ------symbols premitive datatype------
/*
 let s1 = Symbol()
 let s2 = Symbol('test symbol')
console.log(s1 === s2);
*/

