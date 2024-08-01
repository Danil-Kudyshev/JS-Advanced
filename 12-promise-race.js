function a() {
    return new Promise((res,rej) => {
        const resp = fetch('https://dummyjson.com/products/2')
        res(resp)
    })
}
function b() {
    return new Promise((res,rej) => {
        const resp = fetch('https://dummyjson.com/products/1')
        res(resp)
    })
}

function race(promiseArray) {
    return new Promise((resolve, reject) => {
        promiseArray.forEach(res => {
            Promise.resolve(res)
            .then(data=> resolve(data))
            
        });
    })
}
race([a(), b()])
.then(console.log)
.catch(e => console.error(e))
