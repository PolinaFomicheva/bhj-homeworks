const timer = document.getElementById("timer")


// задание 1
// const timerId = setInterval(() => {
//     const value = +timer.textContent;
//     if (value > 0) {
//         timer.textContent = value - 1;
//     } else {
//         clearInterval(timerId);
//         alert('Вы победили в конкурсе!');
//     }
// }, 1000)




// задание 2*
  
const countDownDate = new Date().setSeconds(new Date().getSeconds() + Number(timer.textContent));

function startTimer() {
  const currentDate = new Date().getTime();
  const countDown = new Date(countDownDate).getTime();
  const diff = (countDown - currentDate) / 1000;

  if (diff < 0) {
    window.alert("Вы победили в конкурсе!");
    clearInterval(timerId);
    window.location = "http://hello.kitty";
  } else {
    const hours = String(Math.floor((diff % (60 * 60 * 24)) / (60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((diff % (60 * 60)) / 60)).padStart(2, "0");
    const seconds = String(Math.floor(diff % 60)).padStart(2, "0");

    timer.textContent = hours + ":" + minutes + ":" + seconds;
  }  
}

startTimer();
let timerId = setInterval(startTimer, 1000);

