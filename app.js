const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "blank",
    img: "images/blank.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "white",
    img: "images/white.png",
  },
];

cardArray.sort(() => 0.5 - Math.random()); //this is a shortcut to shuffling an array randomly

const gridDisplay = document.querySelector("#grid");

function createBoard() {
  for (i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);

    gridDisplay.appendChild(card);
  }
}

createBoard();

function flipCard() {
  const cardId = this.getAttribute("data-id");
  console.log(cardArray[cardId].name);
  console.log("clicked", cardId);
}
