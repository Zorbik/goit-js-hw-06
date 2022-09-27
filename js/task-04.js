const counterValue = document.querySelector("#value");
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

decrBtn.addEventListener(
  "click",
  () => (counterValue.textContent = parseInt(counterValue.textContent) - 1)
);

incrBtn.addEventListener(
  "click",
  () => (counterValue.textContent = parseInt(counterValue.textContent) + 1)
);
