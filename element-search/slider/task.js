const slider = document.querySelectorAll(".slider__item");
const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
const dots = document.querySelectorAll(".slider__dot");

let sliderActive = 0;


    arrowPrev.onclick = () => {
        if (sliderActive - 1 < 0) {
            sliderActive = slider.length - 1;
        } else {
            sliderActive -= 1;
        }
        changeSlide(sliderActive);
    }
    
    arrowNext.onclick = () => {
        if (sliderActive + 1 === slider.length) {
            sliderActive = 0;
        } else {
            sliderActive += 1;
        }
        changeSlide(sliderActive);
    }

dots[sliderActive].classList.add('slider__dot_active');
[...dots].forEach((item, i) => item.onclick = () => {
    changeSlide(i);
});

function changeSlide(i) {
    [...slider].forEach((element) => element.classList.remove('slider__item_active'));
    [...dots].forEach((item) => item.classList.remove('slider__dot_active'));
    slider[i].classList.add('slider__item_active');
    dots[i].classList.add('slider__dot_active');
}



