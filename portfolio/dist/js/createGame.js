export function createGameItem(pazzl, itemWrapper, onGameItemClick) {
  pazzl.forEach((item, index) => {
    const gameItem = document.createElement("div");
    gameItem.classList.add("game_item");
    gameItem.dataset.id = item.id;
    gameItem.innerHTML = `
        <p class="item_title">${item.title}</p>
        <img src="./images/${item.img}" alt="pazzle" class="item_image item_image_${index}" />
      `;

    gameItem.addEventListener("click", () => {
      onGameItemClick(gameItem);
    });

    itemWrapper.appendChild(gameItem);
  });
}
