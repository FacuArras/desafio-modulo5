const rock = require("url:../../images/Piedra.svg");
const paper = require("url:../../images/Papel.svg");
const scissors = require("url:../../images/Tijera.svg");
import { state } from "../../state";

export function initPageGame(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.classList.add("home");
  var counter = 0;

  div.innerHTML = `
            <div class="counter__cont">0</div>
            <div class="hands__container">
              <hands-comp tag="scissors" class="notSelected"></hands-comp>
              <hands-comp tag="rock" class="notSelected"></hands-comp>
              <hands-comp tag="paper" class="notSelected"></hands-comp>
            </div>
            `;

  //Contador y tras el 3seg muestra las manos elegidas
  const intervalId = setInterval(() => {
    counter++;
    const counterCont: any = div.querySelector(".counter__cont");
    counterCont.innerHTML = `${counter}`;

    if (counter > 2) {
      clearInterval(intervalId);
      if (state.getState().currentGame.myPlay != "") {
        handsCont.style.display = "none";
        counterCont.style.display = "none";
        div.classList.remove("home");
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
        `;

        if (state.getWhoWins() == "1") {
          setTimeout(() => {
            params.goTo("/win");
          }, 900);
        } else if (state.getWhoWins() == "-1") {
          setTimeout(() => {
            params.goTo("/lose");
          }, 900);
        } else if (state.getWhoWins() == "0") {
          setTimeout(() => {
            params.goTo("/tie");
          }, 900);
        }
      } else if (state.getState().currentGame.myPlay == "") {
        setTimeout(() => {
          params.goTo("/play");
        }, 1000);
      }
    }
  }, 1000);

  //Manos que reaccionan al tocarlas
  const handsCont: any = div.querySelector(".hands__container");
  function selectHands() {
    const divEl = handsCont.children;
    const scissorsEl: any = divEl[0];
    const rockEl: any = divEl[1];
    const paperEl: any = divEl[2];

    scissorsEl.addEventListener("click", () => {
      scissorsEl.classList = "selected";
      rockEl.classList = "notSelected";
      paperEl.classList = "notSelected";
    });

    rockEl.addEventListener("click", () => {
      scissorsEl.classList = "notSelected";
      rockEl.classList = "selected";
      paperEl.classList = "notSelected";
    });

    paperEl.addEventListener("click", () => {
      scissorsEl.classList = "notSelected";
      rockEl.classList = "notSelected";
      paperEl.classList = "selected";
    });
  }

  //Recibe mi jugada y la sube al state junto a la jugada de la computadora
  const myPlay = handsCont.addEventListener("click", (e) => {
    const plays = ["rock", "paper", "scissors"];
    var computerPlay = plays[Math.floor(Math.random() * plays.length)];
    state.setPlay(e.target.tag, computerPlay);
  });

  selectHands();
  return div;
}

/*   const buttonEl = div.querySelector("button-comp");
buttonEl.addEventListener("click", () => {
  params.goTo("/instructions");
}); */
