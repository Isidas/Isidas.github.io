document.addEventListener("DOMContentLoaded", () => {
  let tg = window.Telegram.WebApp;
  tg.expand();
  const frame = document.querySelector("iframe");
  frame.addEventListener("click", () => {
    return frame;
  });
});
