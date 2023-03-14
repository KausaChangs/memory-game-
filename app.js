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

const cardsChosenIds = [];

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
  const cards = document.querySelectorAll("img");
  console.log(cards);
  console.log("check for match!");
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("It's a Match!");
    cards[cardsChosenIds[0]].setAttribute("src", "images/white.png");
    cards[cardsChosenIds[1]].setAttribute("src", "images/white.png");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);

  console.log(cardsChosen);
  console.log(cardsChosenIds);

  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
