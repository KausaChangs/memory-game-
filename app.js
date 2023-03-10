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

const cardsChosen = [];

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

function checkMatch() {
  console.log("check for match!");
}

function flipCard() {
  const cardId = this.getAttribute("data-id");

  cardsChosen.push(cardArray[cardId].name);
  console.log("clicked", cardId);
  console.log(cardsChosen);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
