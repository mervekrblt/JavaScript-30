const nav = document.querySelector('#main')
const navTop = nav.offsetTop
const links = document.querySelectorAll('li')

//change background image
function changeBackground(){
    document.body.style.backgroundImage = "url('https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/879507')"
}

links.forEach(link => link.addEventListener('click', changeBackground))

function fixNav(){
    //When scroll y >= nav's top , fix the nav
    if(window.scrollY>=navTop  ){
        nav.classList.add('nav-fixed')

        //when nav is fixed, apply padding to fix text jump problem
        document.body.style.paddingTop =  `${nav.offsetHeight}px`
    } else {
        nav.classList.remove('nav-fixed')

        //remove padding
        document.body.style.paddingTop =  `${0}px`
    }
}

//add scroll event on window
window.addEventListener('scroll', fixNav)
