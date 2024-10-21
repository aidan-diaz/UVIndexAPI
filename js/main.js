fetch('https://ipinfo.io/json')
.then(res => res.json())
.then(data => {
console.log(data)

    console.log(data.city)
    console.log(data.region)
    console.log(data.loc.split(','))
    const latitude = data.loc.split(',')[0]
    const longitude = data.loc.split(',')[1]

    document.querySelector('#location').innerText = `Your Location: ${data.city}, ${data.region}`


    fetch(`https://currentuvindex.com/api/v1/uvi?latitude=${latitude}&longitude=${longitude}`)
    .then(res => res.json())
    .then(data2 => {
    console.log(data2)

        console.log(data2.now.uvi)
        document.querySelector('#uvIndex').innerText = `Current UV Index: ${data2.now.uvi}`
    })


})
.catch(err => {
    console.log(`error ${err}`)
})