const rock = require("url:../../images/Piedra.svg");
const paper = require("url:../../images/Papel.svg");
const scissors = require("url:../../images/Tijera.svg");

export function initHandsComp() {
  class HandsComponent extends HTMLElement {
    shadow: ShadowRoot;
    tags: string[] = ["rock", "paper", "scissors"];
    tag: string = " ";

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });

      if (this.tags.includes(this.getAttribute("tag"))) {
        this.tag = this.getAttribute("tag");
      } else {
        this.tag;
      }
    }

    connectedCallback() {
      const style = document.createElement("style");

      style.innerHTML = `
          .hand{
            height: 19vh;
            transform: translateY(1vh);
          }

        `;

      this.shadow.appendChild(style);
      this.render();
    }

    render() {
      const image = document.createElement("img");
      image.classList.add("hand");

      if (this.tag == "rock") {
        image.src = rock;
      } else if (this.tag == "paper") {
        image.src = paper;
      } else if (this.tag == "scissors") {
        image.src = scissors;
      }

      this.shadow.appendChild(image);
    }
  }
  customElements.define("hands-comp", HandsComponent);
}
