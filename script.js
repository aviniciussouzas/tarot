const gameBoard = document.getElementById("game-board");
const shuffleButton = document.getElementById("shuffle-btn");

const images = [
  'images/card1.png',
  'images/card2.png',
  'images/card3.png',
  'images/card4.png',
  'images/card5.png',
  'images/card6.png',
  'images/card7.png',
  'images/card8.png',
  'images/card9.png',
  'images/card10.png',
];

let cards = [];
let selectedCard = null;

// Cria as cartas
function createCards() {
  gameBoard.innerHTML = "";
  const shuffledImages = [...images].sort(() => Math.random() - 0.5);
  shuffledImages.forEach((image, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "back");
    card.dataset.image = image;

    card.addEventListener("click", () => {
      if (selectedCard === card) {
        deselectCard(card);
      } else {
        if (selectedCard) deselectCard(selectedCard);
        selectCard(card);
      }
    });

    cards.push(card);
    gameBoard.appendChild(card);
  });
}

// Seleciona uma carta
function selectCard(card) {
  card.classList.remove("back");
  card.style.backgroundImage = `url('${card.dataset.image}')`;
  card.classList.add("selected");
  selectedCard = card;
}

// Deseleciona uma carta
function deselectCard(card) {
  card.classList.add("back");
  card.style.backgroundImage = "url('images/back-image.png')";
  card.classList.remove("selected");
  selectedCard = null;
}

// Embaralha as cartas
function shuffleCards() {
  if (selectedCard) {
    deselectCard(selectedCard);
  }
  cards = [];
  createCards();
}

// Inicializa o jogo
shuffleButton.addEventListener("click", shuffleCards);
createCards();
