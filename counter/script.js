const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

increase.addEventListener("click", (e) => {
  counter.innerHTML++;
});
reset.addEventListener("click", (e) => {
  counter.innerHTML = 0;
});
decrease.addEventListener("click", (e) => {
  counter.innerHTML--;
});
