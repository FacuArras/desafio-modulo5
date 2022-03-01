import { state } from "../../../state";
const loseImg = require("url:../../../images/lose.svg");

export function initPageLose(params) {
  const div = document.createElement("div");
  div.classList.add("home--play");
  div.innerHTML = `
        <div class="hands--play__container">
        <div class="computer-play">
            <hands-comp tag="${
              state.getState().currentGame.computerPlay
            }"></hands-comp>
        </div>
        <div>
            <hands-comp tag="${
              state.getState().currentGame.myPlay
            }" class="my-play"></hands-comp>
        </div>
        </div>
        <div class="lose__container">
            <div class="lose__star--container">
                <img src="${loseImg}" alt="loseImage" class="lose__star">
                <text-comp tag="h3" class="lose__star--text">Perdiste</text-comp>  
            </div>
            <div class="lose__score--container">
                <text-comp tag="h3">Score</text-comp> 
                <text-comp tag="h4">Vos: ${
                  state.getHistoryOfPoints().player
                }</text-comp> 
                <text-comp tag="h4">Máquina: ${
                  state.getHistoryOfPoints().computer
                }</text-comp>
            </div>
            <button-comp>Volver a Jugar</button-comp>
        <div>
        `;

  const buttonEl = div.querySelector("button-comp");
  buttonEl.addEventListener("click", () => {
    params.goTo("/play");
  });

  return div;
}
