const modal = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");

modal.classList.add('modal_active');


const modalClose = document.querySelectorAll(".modal__close_times");
const btn = document.querySelector(".btn");


btn.addEventListener('click', () => {
        clearActiveClasses();
        modalSuccess.classList.add('modal_active');
    })

let arr = modalClose.forEach(element => {
    element.onclick = () => {
        clearActiveClasses();
     };
    });

function clearActiveClasses() {
    modal.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
    }