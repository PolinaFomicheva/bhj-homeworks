const pollTitle = document.getElementById("poll__title");
const pollAnswer = document.getElementById("poll__answers");

const xml = new XMLHttpRequest();
xml.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xml.send();

let dataPost;

xml.addEventListener("readystatechange", () => {
  if (xml.readyState === xml.DONE && xml.statusText === "OK") {
    let data = JSON.parse(xml.response);

    pollTitle.textContent = data.data.title;

    data.data["answers"].forEach((element) => {
      pollAnswer.insertAdjacentHTML(
        "afterbegin",
        `
        <button class="poll__answer">
          ${element} 
        </button>`
      );
    });

    const btn = Array.from(document.querySelectorAll(".poll__answer"));

    btn.forEach((element, index) => {
      element.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
        xhr.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        xhr.send(`vote=${data.id}&answer=${index}`);
        xhr.addEventListener("readystatechange", () => {
          if (xhr.readyState === xhr.DONE && xhr.statusText === "OK") {
            dataPost = JSON.parse(xhr.response);
            pollAnswer.textContent = "";
           
            // for (let key in dataPost) {
            //   pollAnswer.insertAdjacentHTML(
            //     "afterbegin",
            //     `
            //     <div class="item">
            //       <div class = "item__code">
            //         ${dataPost[key].answer}: <span style="font-weight: 700">${dataPost[key].votes}%</span>
            //       </div>
            //     </div>`
            //   );
            // }
          }
          setTimeout(() => window.location.reload(), 9000);
        });
      });
    });
  }
});