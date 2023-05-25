const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

modal.classList.add('modal_active');

modalClose.onclick = () => {
        document.cookie = "modal__close=yes; path=/; expires=";
        modal.classList.remove('modal_active');
     };


     function getCookie(name) {
        let pairs = document.cookie.split('; ');
        let cookie = pairs.find(p => p.startsWith(name + '='));
        return cookie.substring(name.length+1)
    }        

    if (getCookie('modal__close') == 'yes') {
        modal.classList.remove('modal_active');
    }