export function trueAns(
  checkButton,
  btnAgain,
  itemWrapper,
  container,
  botTitle,
  finalFrame,
  gameValidateDiv,
  btnClose,
  footer
) {
  checkButton.classList.add("hide");
  btnAgain.classList.add("hide");
  btnClose.classList.remove("hide");
  itemWrapper.style.display = "none";
  container.style.display = "block";
  finalFrame.classList.remove("hide");
  gameValidateDiv.style.display = "none";
  footer.style.position = "absolute";
  botTitle.innerHTML =
    "<b>Прекрасно! Вы отлично справились!</b><br/>Главное преимущество — отсутствие горения. <br/>А значит";
  botTitle.append();
}
export function falseAns(
  checkButton,
  btnAgain,
  gameValidateDiv,
  itemWrapper,
  botTitle,
  container,
  randomAnswer
) {
  container.style.display = "block";
  checkButton.classList.add("hide");
  btnAgain.classList.remove("hide");
  gameValidateDiv.style.display = "none";
  itemWrapper.style.display = "none";
  botTitle.style.display = "none";
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
