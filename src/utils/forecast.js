const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1d783ab75eb85187ef8d53e35ea05a28/' + latitude + ',' + longitude + '?units=si'
    request({
        url,
        json: true
    }, (error, {body}) => {
        if(error) {
            callback('The weather service is not available', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' out. There is a ' + body.currently.precipProbability + '% chance of rain. The temperature low is ' + body.daily.data[0].temperatureMin + ' and temperature high is ' + body.daily.data[0].temperatureMax + '.')
        }
    })
}

module.exports = forecast