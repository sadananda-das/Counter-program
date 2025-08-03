const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateCounter() {
  counterElement.textContent = count;

  if (count > 0) {
    counterElement.style.color = "#27ae60";
  } else if (count < 0) {
    counterElement.style.color = "#e74c3c";
  } else {
    counterElement.style.color = "#ffffffff";
  }
}

increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();

  counterElement.style.transform = "scale(1.2)";
  setTimeout(() => {
    counterElement.style.transform = "scale(1)";
  }, 300);
});

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "+":
      count++;
      updateCounter();
      break;
    case "ArrowDown":
    case "-":
      count--;
      updateCounter();
      break;
    case "0":
    case "Escape":
      count = 0;
      updateCounter();
      break;
  }
});
updateCounter();
