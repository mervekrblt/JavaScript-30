function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in')

const checkSlide = (e) => {
    sliderImages.forEach(sliderImage => {

        const slideInAt = (window.innerHeight + window.scrollY) - sliderImage.height / 2
        const imageBottom = sliderImage.offsetTop

        const isHalfShown = slideInAt > sliderImage.offsetTop
        const isNotScrolledPast = window.scrollY < imageBottom
        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active')
        }else {
            sliderImage.classList.remove('active')
        }
        console.log(slideInAt, imageBottom)
    })

}

window.addEventListener('scroll', debounce(checkSlide))