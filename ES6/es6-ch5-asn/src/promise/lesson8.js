// what is AJAX??

// AJAX -> Asynchronous javascript and XML

// AJAX is a "web API", we use this API, we can transfer data from any server using URL


// -------AJAX implement with callback-------
/*
const xhr = new XMLHttpRequest() //transfer data
xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

xhr.onreadystatechange = function(e) {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            let users = JSON.parse(xhr.response)
            console.log(users);
        } else {
            console.log(xhr.status);
        }
    }
}
xhr.send()
*/

/*
function getRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function(e) {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                let response = JSON.parse(xhr.response)
                callback(null, response)
            } else {
                callback(xhr.status, null);
            }
        }
    }
    xhr.send()
}

getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
    if(err) {
        console.log(err);
    } else {
        // console.log(res);
        for(let v of res) {
            console.log(v.name);
        }
        console.log('\n\n');
    }
})

getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if(err) {
        console.log(err);
    } else {
        // console.log(res);
        // res.forEach(r => console.log(r.title))
        for(let v of res) {
            console.log(v.title);
        }
    }
})
*/