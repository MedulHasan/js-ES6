// ------ES6 Class--------

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.xx = this.draw(width, height)

        this.test1 = function () {

        }
    }

    // test = function() {

    // }

    draw(a, b) {
        this.a = a
        this.b = b
        console.log(a, b);
        console.log('Drawing...');
    }
}

let rect1 = new Rectangle(45, 23)
console.log(rect1);
let rect2 = new Rectangle(45, 23)
// rect2.draw(10, 20)



// -------ES6 static method-----------
/*
class Person {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    print() {
        console.log(this.name, this.email);
    }

    static create(str) {
        let person = JSON.parse(str)
        return new Person(person.name, person.email)
    }
}

let str= '{"name": "medul", "email": "medul.cse"}'

let p1 = Person.create(str)
console.log(p1);
console.log(p1 instanceof Person);
p1.print()
*/


// --------es6 this---------
// 'use strict'
// function Shape() {
//     this.draw = function() {
//         console.log(this);
//     }
// }

// let s1 = new Shape()
// let anotherShape = s1.draw
// anotherShape()


/*
class Person {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    print() {
        // console.log(this.name, this.email);
    }

    test() {
        console.log(this);
    }

    static create(str) {
        let person = JSON.parse(str)
        return new Person(person.name, person.email)
    }
}

let str= '{"name": "medul", "email": "medul.cse"}'

let p1 = Person.create(str)
// console.log(p1);
// console.log(p1 instanceof Person);
p1.print()


let test = p1.test
test()
*/

// ------private data with symbol in js es6-----
/*
const _radious = Symbol() //this is not a pure private property
const _name = Symbol()
const _draw = Symbol()
class Circle {
    constructor(radious, name) {
        this[_radious] = radious
        this[_name] = name
        this.a = radious
    }

    [_draw]() {
        console.log('drawing...');
    }
}
let c = new Circle(2, 'medul')
console.log(c);


// console.log(Object.getOwnPropertyNames(c));
// let x = Object.getOwnPropertySymbols(c)[1]
// console.log(c[x]);
*/

// ----hide private data with weakmap----
/*
const _radious = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle {
    constructor(radious, name) {
        this.size = 100
        _radious.set(this, radious)
        _name.set(this, name)
        _resize.set(this, () => {
            console.log(this.size);
        })
    }

    draw() {
        console.log('Drawing')
        console.log(_radious.get(this), _name.get(this));
        _resize.get(this)()
    }
}

let c1 = new Circle(12, 'medul')
c1.draw()
 */



// -------getter setter in ES6--------
/*
const _radious = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle {
    constructor(radious, name) {
        this.size = 100
        _radious.set(this, radious)
        _name.set(this, name)
        _resize.set(this, () => {
            console.log(this.size);
        })
    }

    // getradious() {
    //     return _radious.get(this)
    // }

    get radious() {
        return _radious.get(this)
    }

    set radious(v) {
        _radious.set(this, v)
    }

    draw() {
        console.log('Drawing')
        console.log(_radious.get(this), _name.get(this));
        _resize.get(this)()
    }
}

let c1 = new Circle(12, 'medul')
c1.draw()
c1.radious = 150 //setter
console.log(c1.radious); //getter
*/


// --------inheritance in ES6---------
/*
class Shape {
    constructor(color) {
        this.color = color
    }

    draw() {
        console.log('Drawing...');
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color)
        this.width = width
        this.height = height
    }

    calculate() {
        return this.width * this.height
    }
}

let r = new Rectangle('red', 4, 5)
console.log(r);
console.log(r.calculate());
r.draw()
*/


// ------Method overriding in ES6--------
/*
class Shape {
    constructor(color) {
        this.color = color
    }

    draw() {
        console.log('Drawing...');
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color)
        this.width = width
        this.height = height
    }
    draw() { //method overriding
        console.log('Rect Draw');
    }

    calculate() {
        return this.width * this.height
    }
}

let r = new Rectangle('red', 4, 5)
console.log(r);
console.log(r.calculate());
r.draw()
*/


// ------module in ES6-------
/*
import Rectangle from './Rectangle'

let r = new Rectangle('red', 4, 5)
console.log(r);
console.log(r.calculate());
r.draw()
*/

/*
// -------multiple function import-----
import * as func from './func'
console.log(func.add(1, 2));
console.log(func.mul(1, 2));
*/

/*
// ------  destructure --------
import { add, div } from './func'
console.log(add(5,2));
console.log(div(6,2));
*/