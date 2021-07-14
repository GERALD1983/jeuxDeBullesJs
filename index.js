const colorArray = [
  "black",
  "blue",
  "yellow",
  "red",
  "green",
  "grey",
  "aqua",
  "brown",
];
counterText = document.querySelector("h3");
counter = 1;
const tirSon = new Audio("son/Pop1.mp3");

const makeBubble = () => {
  let random = colorArray[Math.floor(Math.random() * colorArray.length)];
  let bulles = document.createElement("div");

  bulles.style.backgroundColor = random;

  bulles.textContent = "TIR";

  bulles.classList.add("bulle");
  document.body.appendChild(bulles);

  const size = Math.random() * 150 + 50 + "px";

  bulles.style.height = size;

  bulles.style.width = size;

  const plusMoins = Math.random() < 0.5 ? 1 : -1;

  bulles.style.top = Math.random() * 100 + 150 + "%";
  bulles.style.left = plusMoins * 100 + "%";

  bulles.style.setProperty("--left", Math.random() * 100 + "%");

  bulles.addEventListener("click", () => {
    tirSon.play();

    bulles.remove();
    counterText.textContent = counter++;
  });
};

setInterval(makeBubble, 1500);
