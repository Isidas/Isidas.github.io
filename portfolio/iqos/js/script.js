let tg = window.Telegram.WebApp;
tg.expand()
const textArray = [
  "Самое время насладиться вкусом. Вы можете сделать затяжку",
  "А вы точно делаете плавные затяжки? Теперь самое время!",
  "Можете сделать затяжку. Посчитаем до 15 вместе? Столько времени нужно, чтобы табак нагрелся до необходимой температуры.",
  "Согласитесь, вкус стоит того, чтобы ждать! Можете сделать затяжку",
  "3,2,1 – табак нагрелся до оптимальной температуры, значит, момент для затяжки настал.",
  "Сверим часы? Кажется, время для новой затяжки!",
  "Никакой спешки и суеты: наслаждайтесь вкусом здесь и сейчас. Можете сделать затяжку",
  "Напоминание: важно делать плавные и неглубокие затяжки. Время пришло",
  "Впереди еще одна затяжка — Ваш IQOS уже готов, а вы? Можете сделать затяжку",
  "Напоминание: не торопиться и наслаждаться моментом. Вы можете сделать затяжку",
  "На очереди затяжка – ожидание того стоило!",
  "Кто ждет, обязательно дождется! Теперь можете сделать затяжку.",
  "В вопросах вкуса спешка ни к чему! Вы подождали, так что теперь можно сделать затяжку",
  "Что такое 15 секунд ожидания? Зато теперь вкус табака может раскрыться лучше. Можете сделать затяжку",
  "У вас отлично получается! Надеюсь, вы насладились сеансом. Если хотите, вы всегда можете запустить трекер заново.",
];

const text = document.querySelector(".output");
const timer = document.querySelector(".timer");
const stopBtn = document.querySelector(".btn-stop");
const startBtn = document.querySelector(".btn-start");

let interval = null;
let index = 0;
let timerIndex = 15;

const resetStartBtn = () => {
  clearInterval(interval);
  interval = null;
  index = 0;
  timerIndex = 15;
  startBtn.disabled = false;
  startBtn.classList.remove("btn-hide");
};

const updateTimer = () => {
  timer.innerHTML = timerIndex;
  text.innerHTML = textArray[index];
  if (timerIndex === 0) {
    ++index;
    timerIndex = index === textArray.length - 1 ? 0 : 15;
  } else {
    timerIndex--;
  }
  if (index === textArray.length) {
    timer.innerHTML = "";
    text.innerHTML =
      "У вас отлично получается! Надеюсь, вы насладились сеансом. Если хотите, вы всегда можете запустить трекер заново.";
    clearInterval(interval);
    stopBtn.classList.add("btn-hide");
    resetStartBtn();
  }
};

const startInterval = () => {
  if (interval === null) {
    startBtn.disabled = true;
    updateTimer();
    interval = setInterval(updateTimer, 1000);
  }
};

const resetInterval = () => {
  resetStartBtn();
  stopBtn.classList.add("btn-hide");
  timer.innerHTML = "";
  text.innerHTML =
    "Я буду здесь, если вам понадобится помощь и совет. Не забывайте делать плавные затяжки и паузы между ними – примерно 10 секунд. Так вы сможете раскрыть вкус, и образуется оптимальное количество пара.";
};

startBtn.addEventListener("click", () => {
  if (interval === null) {
    startInterval();
    startBtn.classList.add("btn-hide");
    stopBtn.classList.remove("btn-hide");
  } else {
    resetStartBtn();
  }
});
stopBtn.addEventListener("click", resetInterval);
