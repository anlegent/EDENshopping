let response = await fetch("https://dummyjson.com/products/1");
let responseAsJSON = await response.json();
let products = responseAsJSON;

const app = document.getElementById("app");
const article = document.createElement("article");
const title = document.createElement("h2");
const image = document.createElement("img");
const price = document.createElement("p");

title.textContent = products.title;
image.setAttribute("src", products.images[0]);
price.textContent = products.price + "€";

article.appendChild(title);
article.appendChild(image);
article.appendChild(price);
app.appendChild(article);

image.addEventListener("click",)