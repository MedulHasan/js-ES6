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

const base_url = 'https://jsonplaceholder.typicode.com'

getRequest(`${base_url}/posts/1`, (err, res) => {
    if(err) {
        throw new Error('Error...')
    }
    let {userid} = res

    getRequest(`${base_url}/users/${userid}`, (err, res) => {
        if(err) {
            throw new Error('Error2...')
        }

        getRequest(`${base_url}/posts/1/comments/${res.id}`, (err, res) => {
            if(err) {
                throw new Error('Error3...')
            }
            console.log(res);
        })
    })
})
*/