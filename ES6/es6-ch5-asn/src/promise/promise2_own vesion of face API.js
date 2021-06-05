/*

const base_url = 'https://jsonplaceholder.typicode.com'

fetch(`${base_url}/users/1`)
.then(res => res.json())
.then(data => {
    console.log(data);
    return Promise.resolve()
})
.then(str => {
    console.log('something');
    return Promise.resolve('another')
})
.then(another => {
    console.log(another);
})
.catch((e) => {
    console.log(e);
})

*/

/*
const base_url = 'https://jsonplaceholder.typicode.com'
function getRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url)

        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.response)
                    resolve(response)
                } else {
                    reject(new Error('Error..'))
                }
            }
        }
        xhr.send()
    })
}

getRequest(`${base_url}/users/1`)
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e.message);
    })
*/