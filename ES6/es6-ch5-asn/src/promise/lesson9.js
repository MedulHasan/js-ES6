// -------callback is not always mean asynchronous-----
/*
// normal callback function
let arr = [1,2,3,4]
let sqr = arr.map((v) => v * v)
console.log(sqr);

// asynchronous
    function asynMap (arr, cb) {
        return arr.map(v => {
            // setTimeout(cb.bind(null, v), 0)
            setTimeout(()=>cb(v), 0)
        })
    }

    // let qb = asynMap(arr, v => v*v*v)
    let qb = asynMap(arr, v => {
        console.log(v*v*v);
    })
    console.log(qb);
*/
