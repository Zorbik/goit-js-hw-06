const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfElement = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.className = "item";
  element.textContent = ingredient;
  return element;
});

document.body.querySelector("#ingredients").append(...listOfElement);
