const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let activeNum = 0;
let speed = 0;

const changeRotator = (arr) => {
    clearInterval(interval);
    for (num of arr) {
        num.className = 'rotator__case'
    }
    activeNum++

    if (activeNum === arr.length) {
        activeNum = 0;
    }

    arr[activeNum].classList.add('rotator__case_active');
    arr[activeNum].style.color = arr[activeNum].dataset.color;
    speed = arr[activeNum].dataset.speed;
    interval = setInterval(changeRotator, speed, rotator);
}

let interval = setInterval(changeRotator, speed, rotator);