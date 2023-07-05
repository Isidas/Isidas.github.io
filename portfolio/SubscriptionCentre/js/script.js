let tg = window.Telegram.WebApp;
tg.expand();
window.addEventListener("load", function () {
  window.location.href =
    "https://cloud.mc.iqos.ru/subscription-center?personid=" +
    $session.spice_id +
    "&utm_medium=tg_bot&utm_campaign=subscription";
});
