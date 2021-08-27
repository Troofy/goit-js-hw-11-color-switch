const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "#0a1668",
  "#59318d",
  "#438c4a",
  "#4b5278",
  "#8575a6",
  "#beb54e",
];

let intervalId = null;

const min = 0;
const max = colors.length - 1;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyColor() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
}

// ======== старт ========
refs.startBtn.addEventListener("click", () => {
  refs.startBtn.disabled = true;
  intervalId = setInterval(changeBodyColor, 1000);
});

// ======== стоп ========
refs.stopBtn.addEventListener("click", () => {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
});
