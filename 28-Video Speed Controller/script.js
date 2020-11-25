const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

function changeSpeed(e){
  const x =e.pageX-this.offsetLeft //when click beginning of the bar it gives 0
  const percent = x / this.offsetWidth //it gives percentage based on x / width of speed 
  const min = 0.8
  const max = 4.0 

  const width =`${Math.floor(percent*100)}%` //it is for speed bar effect
  bar.style.width = width
  
  const playbackRate =(percent*(max-min)+min).toFixed(2)
  bar.textContent = playbackRate+'x'

  video.playbackRate = playbackRate
}


speed.addEventListener('click', changeSpeed)