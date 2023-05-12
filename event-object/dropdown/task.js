const valueDrop = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const links = document.querySelectorAll(".dropdown__link");

valueDrop.onclick = () => {
    list.classList.toggle('dropdown__list_active');
};

[...links].forEach((item) => item.onclick = () => {
    valueDrop.textContent = item.textContent;
    list.classList.remove('dropdown__list_active');
    return false;
})