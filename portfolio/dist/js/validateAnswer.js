export function trueAns(
  btnAgain,
  itemWrapper,
  container,
  botTitle,
  finalFrame,
  gameValidateDiv,
  btnClose,
  footer
) {
  btnAgain.classList.add("hide");
  btnClose.classList.remove("hide");
  itemWrapper.style.display = "none";
  container.style.display = "block";
  finalFrame.classList.remove("hide");
  gameValidateDiv.style.display = "none";
  footer.style.position = "absolute";
  botTitle.innerHTML = `<b>Прекрасно! Вы отлично справились!</b><br>
  Главное преимущество:
  отсутствие горения, а значит..`;
  botTitle.append();
}
export function falseAns(
  btnAgain,
  gameValidateDiv,
  itemWrapper,
  botTitle,
  container,
  randomAnswer,
  footer
) {
  container.style.display = "block";
  btnAgain.classList.remove("hide");
  gameValidateDiv.style.display = "none";
  itemWrapper.style.display = "none";
  botTitle.style.display = "none";
  footer.style.position = "absolute";
  const wrongFrame = document.createElement("div");
  wrongFrame.classList.add("quize__x__item", "quize__x__item--status");
  wrongFrame.innerHTML = `
        <div class='quize__x__item--status__info'>
          <div class='quize__x__item--status__info__inner'>
            <div class='quize__x__item--status__icon'>
              <img src='images/wrong.svg'>
            </div>
            <div class='quize__x__item--status__title'>${randomAnswer}</div>
          </div>
        </div>
      `;
  container.insertBefore(wrongFrame, botTitle.nextSibling);
}
