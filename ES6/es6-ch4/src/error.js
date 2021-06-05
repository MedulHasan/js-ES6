// ------error in js------
/*
let m = 10
if(m > 5) {
    throw new Error('m is greater then 5');
}
*/

/*
// range error
let x = 56
if (x > 50) {
    throw new RangeError('number is too long')
}
*/


// --------error handling with if else--------
/*
function convertToInt(v) {
    let res = Number.parseInt(v)
    if(!res) {
        return 'provide a valid input'
    }
    return res
}

let res = convertToInt('medul')
console.log(res);
*/


// --------error handling with try catch--------
/*
function makeWords(text) {
    try {
        let str = text.trim()
        let words = str.split(' ')
        return words
    } catch(e) {
        // console.log(e);
        console.log('provide valid text');
    }
}

let words = makeWords(25)
console.log(words);
*/

// --------throw an error --------
/*
try {
    console.log('i am line 1');
    throw new Error('error...')
    console.log('i am line 2');
    console.log('i am line 3');
} catch(e) {
    console.log(e.message);
}
*/


// -------finally block------
/*
try {
    console.log('i am line 1');
    throw new Error('error...')
    console.log('i am line 2');
    console.log('i am line 3');
} catch(e) {
    console.log(e.message);
} finally {
    console.log('finally i am print must');
}
*/

// ------build our own "custom error"--------
/*
class CustomError extends Error {
    constructor(msg) {
        super(msg)

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}

try {
    console.log('i am line 1');
    throw new CustomError('build a custom error...')
    console.log('i am line 2');
    console.log('i am line 3');
} catch(e) {
    console.log(e.message);
} finally {
    console.log('finally i am print must');
}
*/