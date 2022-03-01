import { state } from "../../../state";
const tieImg = require("url:../../../images/tie.svg");

export function initPageTie(params) {
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
        <div class="tie__container">
            <div class="tie__star--container">
                <img src="${tieImg}" alt="tieImage" class="tie__star">
            </div>
            <div class="tie__score--container">
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
