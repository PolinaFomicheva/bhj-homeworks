const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let value = 0;

cookie.onclick = function() {
    value++;
    clickerCounter.textContent = value;
    if (value % 2 == 0) {
        cookie.width = 250;
    } else {
        cookie.width = 180;
    }

    // let timeStart= new Date();
    // let timeNow = new Date();
    // clickerSpeed.textContent = (1 / ((timeNow.getTime() - timeStart.getTime()) / 1000)).toFixed(2);
    // timeStart = new Date();
}


// другой способ изменения печеньки и счетчика
// cookie.onclick = function() {
//     cookie.classList.toggle('cookie-size');
// }

// cookie.addEventListener('click', function (e){
//     clickerCounter.textContent = e.detail;
// })