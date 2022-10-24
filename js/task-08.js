const form = document.querySelector(".login-form");

form.addEventListener("submit", onLoginBtnClick);

function onLoginBtnClick(event) {
  event.preventDefault();
  const element = event.currentTarget.elements;

  if (!element.email.value || !element.password.value) {
    alert("Все поля должны быть заполнены");
    return;
  }
  const formData = new FormData(event.currentTarget);

  const data = {};
  formData.forEach((value, key) => (data[key] = value));
  console.log(data);

  form.reset();
}
