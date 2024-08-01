function geolocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {coords} = position
            if(!coords) {
                reject(new Error('Ошибка'))
            }
            resolve({
                latitude: coords.latitude, 
                longitude: coords.longitude
            })
        })
    })
}
geolocation()
    .then(({latitude, longitude}) => {
        console.log(`latitude:${latitude}\nlongitude:${longitude}`)
    })
    .catch(err => console.error(err))