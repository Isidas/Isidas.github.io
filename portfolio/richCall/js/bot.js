let tg = window.Telegram.WebApp;
tg.expand();
const frame = document.querySelector("iframe");

document.addEventListener("click", () => {
  document.activeElement.blur();
});
