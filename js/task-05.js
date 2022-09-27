const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener(
  "input",
  () =>
    (outputValue.textContent = inputValue.value
      ? inputValue.value
      : "Anonymous")
);
