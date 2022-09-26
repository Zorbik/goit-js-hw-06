const baseRefs = document.querySelectorAll(".item");

console.log(`Number of categories: ${baseRefs.length}`);

baseRefs.forEach(function (item) {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
