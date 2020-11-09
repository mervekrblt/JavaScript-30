const timeNodes = Array.from(document.querySelectorAll('[data-time]'))
const h1 = document.querySelector('h1')
// seconds equals to total vidoe's time
const seconds = timeNodes
                .map(node => node.dataset.time)
                .map(timeCode => {
                    const [mins, secs] = timeCode.split(":").map(parseFloat)
                    return (mins* 60) +secs;
                })
                .reduce((total, videoSec) => total + videoSec)
                
let secondsLeft = seconds
const hour = Math.floor(secondsLeft/3600) 
secondsLeft = secondsLeft%3600 // To find how many sec after removing hour

const minute = Math.floor(secondsLeft/ 60) 

const second = Math.floor(secondsLeft%60)   

// To write total time in h1 element
h1.innerHTML = `Hour:${hour} Min:${minute} Sec:${second}`
