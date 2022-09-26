const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const listOfElements = images.map((element) => {
//   const image = document.createElement("img");
//   image.className = "gallery__image";
//   image.setAttribute("src", element.url);
//   image.setAttribute("alt", element.alt);

//   const item = document.createElement("li");
//   item.className = "gallery__item";
//   item.appendChild(image);

//   return item;
// });

// document.querySelector(".gallery").append(...listOfElements);
const listOfElements = images
  .map(
    (element) =>
      `<li class="gallery__item"><img class="gallery__image" src=${element.url} alt="${element.alt}" /></li>`
  )
  .join("");

document
  .querySelector(".gallery")
  .insertAdjacentHTML("afterbegin", listOfElements);
