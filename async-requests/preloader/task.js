const items = document.getElementById('items');
const loader = document.getElementById('loader')

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE && xhr.statusText === "OK") {
    loader.classList.remove('loader_active');

    items.textContent = "";
    data = JSON.parse(xhr.response).response.Valute;
    localStorage.setItem("data", JSON.stringify(data));

  for (let key in data) {
    items.innerHTML += `
    <div class="item">
      <div class = "item__code">
        ${data[key].CharCode}
      </div>
      <div class = "item__value">
        ${data[key].Value}
      </div>
      <div class = "item__currency">
        руб.
      </div>
    </div>
    `;
  }
}
});
