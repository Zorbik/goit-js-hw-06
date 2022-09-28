function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
button.addEventListener("click", handleColorOnBody);

function handleColorOnBody() {
  document.body.style.backgroundColor = getRandomHexColor();
  document.querySelector(".color").textContent = getRandomHexColor();
}
