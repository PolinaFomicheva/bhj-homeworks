const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
// const hole = document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = function () {
      if (hole.classList.contains("hole_has-mole")) {
        dead.textContent++;
      } else {
        lost.textContent++;
      }
      if (dead.textContent == 10) {
        alert("Победа");
        dead.textContent = 0;
        lost.textContent = 0;
      }
      if (lost.textContent == 5) {
        alert("Поражение");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    };
  }
