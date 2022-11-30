var slides = document.querySelectorAll('.slide');

counter = 0;
slides.forEach(
    (slide, index) => {
slide.style.left = `${index * 100}%`

})


const gonext = () => {
    counter++
    
    slideimage()
}

const goprev = () => {
    counter--
    slideimage()
}


const slideimage = () => {
    slides.forEach(
        (slide) => {
slide.style.transform = `translateX(-${counter * 100}%)`

    }
    )
}

/*for top to bottom*/
/*  slide.style.bottom =  `${index * 100}%`
and  
slide.style.transform = `translateY(${counter * 100}%)`*/