const textArray = [
  "Самое время насладиться вкусом. Вы можете сделать затяжку",
  "А вы точно делаете плавные затяжки? Теперь самое время!",
  "Можете сделать затяжку.Посчитаем до 10 вместе? Столько времени нужно, чтобы табак нагрелся до необходимой температуры.",
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
  "Что такое 10 секунд ожидания? Зато теперь вкус табака может раскрыться лучше. Можете сделать затяжку",
  "У вас отлично получается! Надеюсь, вы насладились сеансом. Если хотите, вы всегда можете запустить трекер заново.",
];

const text = document.querySelector(".output");
const timer = document.querySelector(".timer");
const stopBtn = document.querySelector(".btn-stop");
const startBtn = document.querySelector(".btn-start");

let interval = null;

const iterateText = () => {
  let index = 0;
  let timerIndex = 10;

  const updateTimer = () => {
    timer.innerHTML = timerIndex;
    text.innerHTML = textArray[index];
    timerIndex--;
    if (timerIndex < 0) {
      index++;
      timerIndex = 10;
    }
    if (index === textArray.length) {
      clearInterval(interval);
      timer.innerHTML = "";
    }
  };

  const startInterval = () => {
    if (interval === null) {
      updateTimer();
      interval = setInterval(updateTimer, 1000);
    }
  };
  startInterval();
  startBtn.addEventListener("click", startInterval);

  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null; // Сброс интервала
    timer.innerHTML = "";
    text.innerHTML =
      "Я буду здесь, если вам понадобится помощь и совет. Не забывайте делать плавные затяжки и паузы между ними – примерно 10 секунд. Так вы сможете раскрыть вкус, и образуется оптимальное количество пара.";
  });
};

iterateText();
