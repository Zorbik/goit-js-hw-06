function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector('[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

refs.createBtn.addEventListener("click", handlerAmount);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function handlerAmount(amount = 0) {
  amount = parseInt(refs.input.value);
  сreateBoxes(amount);
}

function сreateBoxes(amount = 0) {
  let boxes = "";
  for (let i = 0; i < amount; i += 1) {
    boxes += `<div class="box" style="background-color:
    ${getRandomHexColor()};
    height: ${30 + i * 10}px;
    width: ${30 + i * 10}px; 
    margin-bottom: 5px;
    border: 1px solid black "></div>`;
  }
  return document
    .querySelector("#boxes")
    .insertAdjacentHTML("afterbegin", boxes);
}

function destroyBoxes() {
  // location.reload();
  refs.input.value = "";
  document.querySelector("#boxes").innerHTML = "";
}
