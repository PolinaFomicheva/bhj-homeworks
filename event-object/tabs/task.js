const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

[...tab].forEach((item, i) => item.onclick = () => {
        changeTab(i);
});


   function changeTab(i) {
    [...tab].forEach((element) => element.classList.remove('tab_active'));
    [...tabContent].forEach((list) => list.classList.remove('tab__content_active'));
    tab[i].classList.add('tab_active');
    tabContent[i].classList.add('tab__content_active');
   }

