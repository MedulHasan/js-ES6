// -------------iterator-----------
/*
// Array iterator
const arr = [1, 2, 3]

function createIterator(collection) {
    let i = 0
    return {
        next () {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}

let iterate = createIterator(arr)
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

// string iterator
let str = 'medul'

function strite(coll) {
    let i = 0
    return {
        next() {
            return {
                done: i >= coll.length,
                value: coll[i++]
            }
        }
    }
}
let x = strite(str)
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
*/

// ---------iterator with symbol ES6-------
/*
const arr2 = [1, 2, 3]
let iterator = arr2[Symbol.iterator]()

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

/*
const str2 = 'medul'
let strIte = str2[ Symbol.iterator]()

console.log(strIte.next());
console.log(strIte.next());
console.log(strIte.next());
console.log(strIte.next());
console.log(strIte.next());
console.log(strIte.next());
*/


// ---------"for of"  loop--------
/*
let arr = [1, 2, 3, 4]
for(let v of arr) {
    console.log(v);
}

for(let v of 'medul') {
    console.log(v);
}
*/

// --------generator function------------
/*
let obj = {
    start: 1,
    end: 5,

    [Symbol.iterator]: function* () {
        let currValue = this.start
        while(currValue <= this.end) {
            yield currValue++
        }
    }
}

let iterator = obj[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

/*
let arr = [1, 2]
function* generate(coll) {
    for(let i = 0; i < coll.length; i++) {
        yield coll[i]
    }
}

let ite = generate(arr)
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
*/

// ----------set in js ES6-----------

// let set = new Set([1, 2, 3]) //set decleration 
// set.add(5) //set added a value
// set.add(6)
// set.add(1) //set do not duplicate any value
// set.add(2)
// console.log(set);
// console.log(set.size);
// set.clear() //clear set
// set.delete(5) //deleat 5
// console.log(set.has(8));
// console.log(set.keys());
// console.log(set.values());

// let keyIterator = set.keys()
// console.log(keyIterator.next());
// console.log(keyIterator.next());

// let keyIterator = set.values()
// console.log(keyIterator.next());


/*
function isIterable(obj) {
    return typeof obj[Symbol.iterator] ==='function'
}
console.log(isIterable(set));
*/


// for(let v of set) {
//     console.log(v);
// }


// console.log(set.entries());



// -------------Map in js ES6--------------

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30],
//     [{name: 'medul hasan'}, 45]
// ])
// map.set('d', 40)
// map.set({name: 'medul'}, 12)
// console.log(map)

// console.log(map.size);

// map.delete('c')
// console.log(map);

// map.clear()
// console.log(map);

// console.log(map.get('d'));

// console.log(map.keys());

// console.log(map.values());

// console.log(map.entries());

// for(let [v, k] of map) {
//     console.log(v, k);
// }

// map.forEach((v, k) => {
//     console.log(v, k);
// })

// ---------weak Set in ES6---------
// set

// let a = {a: 10}, b = {b: 20}
// let set = new Set([a, b])
// a = null
// console.log(set);
// let arr = [...set]
// console.log(arr[0]);


// weak set
// let a = {a: 10}, b = {b: 20}
// let weakset = new weakSet([a, b])
// console.log(weakset);

// weak map
// let a = {a: 10}, b = {b: 20}
// let weakmap = new weakmap([[a, 12], [b, 14]])
// console.log(weakmap);
