const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

const changeTextRange = () =>
  (refs.textEl.style.fontSize = `${refs.inputEl.value}px`);

refs.inputEl.addEventListener("input", changeTextRange);
