const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    for (item of reveals) {
        if(item.getBoundingClientRect().top < window.innerHeight || item.getBoundingClientRect().bottom > 0) {
            item.classList.add('reveal_active');
        }
        if(item.getBoundingClientRect().top > window.innerHeight || item.getBoundingClientRect().bottom < 0) {
            item.classList.remove('reveal_active');
        }
    }
})