

document.querySelector(".menu_main").onclick = (event) => {
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.classList.toggle("menu_active");
      return false;
    }
  };







//  (вариант с одним активным окном) 
// const menuSub = Array.from(document.querySelectorAll(".menu_sub"));

// menuSub.forEach(item => {
//   const menuLink = item.parentElement.querySelector(".menu__link");

//   menuLink.onclick = () => {
//     menuSub.forEach((list) => {
//       if (item.closest(".menu_main") === list.closest(".menu_main")) {
//         list.classList.remove("menu_active")
//       }
//     })
//     item.classList.add("menu_active");
//     return false
//   }
// })