let tg = window.Telegram.WebApp;
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
    gameItem.innerHTML = `
      <p class="item_title">${item.title}</p>
      <img src="./images/${item.img}" alt="pazzle" class="item_image item_image_${index}" />
    `;

    // Добавляем обработчик события при клике на элемент
    gameItem.addEventListener("click", () => {
      // Делаем элемент серым и неактивным
      gameItem.classList.add("grayed-out");
      gameItem.classList.add("disabled");

      // Находим первое свободное поле пазла
      const puzzleField = document.querySelector(".puzzle_container img:not(.filled)");
      if (puzzleField) {
        // Помещаем картинку элемента в поле пазла
        const itemImage = gameItem.querySelector("img");
        puzzleField.src = itemImage.src;
        puzzleField.classList.add("filled");
      }
    });

    itemWrapper.appendChild(gameItem);
  });
};

function addPuzzleField() {
  const gameValidateDiv = document.querySelector(".game_validate");

  // Создание контейнера для полей пазла
  const puzzleContainer = document.createElement("div");
  puzzleContainer.classList.add("puzzle_container");

  // Создание и добавление полей пазла
  for (let i = 1; i <= 4; i++) {
    const puzzleField = document.createElement("img");
    puzzleField.classList.add("puzzle_field", `puzzle_field_${i}`);
    puzzleField.src = "./images/7.png";
    puzzleField.alt = "puzzle_wrapper";
    puzzleContainer.appendChild(puzzleField);
  }

  // Добавление контейнера с полями пазла в game_validateDiv
  gameValidateDiv.appendChild(puzzleContainer);
}

// Вызов функции для добавления поля пазла
addPuzzleField();
createGameItem();

// Добавление кнопки для проверки правильности сборки пазлов
const checkButton = document.createElement("button");
checkButton.textContent = "Проверить";
checkButton.addEventListener("click", () => {
  const puzzleFields = document.querySelectorAll(".puzzle_field");
  const isPuzzleCorrect = Array.from(puzzleFields).every((field, index) => {
    // Проверяем соответствие правильности сборки
    const puzzleIndex = index + 1;
    const puzzle = pazzl.find((item) => item.id === puzzleIndex);
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
