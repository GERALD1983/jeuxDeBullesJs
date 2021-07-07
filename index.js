let bulles = document.createElement("div");

bulles.classList.add("bulle");
document.body.appendChild(bulles);

const size = Math.random() * 150 + 50 + "px";

let bulle = document.querySelector(".bulle");

bulle.style.height = size;

bulle.style.width = size;
