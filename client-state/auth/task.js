const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const btnExit = document.querySelector('.deauthorization');
const welcome = document.querySelector('.welcome');

const userId = document.getElementById('user_id');


const showGreet =() => {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
};

window.addEventListener('load', ()=> {
    if (localStorage.loginId) {
        showGreet();
        userId.textContent = localStorage.loginId;
    }
});

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let userDate = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    request.responseType = 'json'
    request.send(userDate);
    request.addEventListener('load', () => {
            let data = request.response;
            if (data.success) {
                showGreet()
                userId.textContent = data.user_id
                localStorage.loginId = data.user_id
            }  else {
                alert('Неверный логин/пароль');
                form.reset();
            }
    });
});

btnExit.addEventListener('click', ()=> {
    localStorage.removeItem('loginId');
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    form.reset();
});