function setDate(){
    const now = new Date()
    const sec = now.getSeconds()
    console.log(sec)
}

setInterval(setDate, 1000)