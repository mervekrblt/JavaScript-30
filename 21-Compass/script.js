const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition(data => {
    console.log(data.coords.speed)
    speed.textContent = data.coords.speed
    speed.stlyle.transform = `rotate${data.coords.heading}deg`
}, (err) => {
    alert("You didn't allow me to get your location")
})