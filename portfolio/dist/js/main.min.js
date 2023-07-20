const tg = window.Telegram.WebApp;
tg.expand();
const pazzl = [
  { id: 1, title: "Нет пепла", img: "1.png", right: true },
  { id: 2, title: "Есть дым и пепел", img: "2.png", right: false },
  {
    id: 3,
    title: "Меньше едкого запаха,чем при курении сигарет",
    img: "3.png",
    right: true,
  },
  { id: 4, title: "Нет нагревания", img: "4.png", right: false },
  { id: 5, title: "Настоящий вкус табака", img: "5.png", right: true },
  { id: 6, title: "Нет сигаретного дыма", img: "6.png", right: true },
];

const createGameItem = () => {
  const itemWrapper = document.querySelector(".game_wrapper");
  pazzl.forEach((item, index) => {
    const gameItem = document.createElement("div");
    gameItem.classList.add("game_item");
    gameItem.dataset.id = item.id; // Устанавливаем атрибут data-id для каждого элемента
    gameItem.innerHTML = `
      <p class="item_title">${item.title}</p>
      <img src="./images/${item.img}" alt="pazzle" class="item_image item_image_${index}" />
    `;

    gameItem.addEventListener("click", () => {
      onGameItemClick(gameItem);
    });

    itemWrapper.appendChild(gameItem);
  });
};

function addPuzzleField() {
  const gameValidateDiv = document.querySelector(".game_validate");

  const puzzleContainer = document.createElement("div");
  puzzleContainer.classList.add("puzzle_container");

  for (let i = 1; i <= 4; i++) {
    const puzzleField = document.createElement("img");
    puzzleField.classList.add("puzzle_field", `puzzle_field_${i}`);
    puzzleField.src = "./images/7.png";
    puzzleField.alt = "puzzle_wrapper";
    puzzleContainer.appendChild(puzzleField);
  }

  gameValidateDiv.appendChild(puzzleContainer);
}

function onGameItemClick(gameItem) {
  if (gameItem.classList.contains("disabled")) return; // Если элемент уже использован, ничего не делаем

  const puzzleField = document.querySelector(".puzzle_container img:not(.filled)");
  if (puzzleField) {
    const itemImage = gameItem.querySelector("img");
    puzzleField.src = itemImage.src;
    puzzleField.dataset.id = gameItem.dataset.id; // Устанавливаем атрибут data-id для поля пазла
    puzzleField.classList.add("filled");
    gameItem.classList.add("disabled");
  }
}

window.onload = () => {
  addPuzzleField();
  createGameItem();

  const checkButton = document.createElement("button");
  checkButton.textContent = "Проверить";
  checkButton.addEventListener("click", () => {
    const puzzleFields = document.querySelectorAll(".puzzle_field");
    const isPuzzleCorrect = Array.from(puzzleFields).every((field) => {
      const fieldId = field.dataset.id;
      const puzzle = pazzl.find((item) => item.id === Number(fieldId));
      return field.src.includes(puzzle.img) === puzzle.right;
    });

    if (isPuzzleCorrect) {
      alert("Пазлы собраны верно!");
    } else {
      alert("Пазлы собраны неверно!");
    }
  });

  const gameValidateDiv = document.querySelector(".game_validate");
  gameValidateDiv.appendChild(checkButton);
};
