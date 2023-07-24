export function createFinalFrame(finalFrame) {
  const text = `<img src="./images/final.png" alt="finalFrame" class="game_final-img" />
  <span class="game_final-text game_final-text_1"
    >Нет сигаретного дыма</span
  >
  <span class="game_final-text game_final-text_2"
    >Настоящий вкус табака</span
  >
  <span class="game_final-text game_final-text_3">Нет пепла</span>
  <span class="game_final-text game_final-text_4"
    >Меньше едкого запаха, чем при курении сигарет</span
  >`;
  finalFrame.innerHTML = text;
}
