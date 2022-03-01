export function initButtonComp() {
  class ButtonComponent extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }

    render() {
      const button = document.createElement("button");
      const style = document.createElement("style");
      button.className = "button";

      style.innerHTML = `
      .button {
        font-family: "Odibee Sans", cursive;
        display: block;
        font-size: 45px;
        margin: 0 auto 0 auto;
        padding: 19px 18%;
        color: #d8fcfc;
        background-color: #006cfc;
        border: solid #001997 10px;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: 0.4s;
      }
      @media (min-width:960px){
        .button{
          padding: 19px 91px;
        }
      }
      .button:active {
        transform: translateY(7px);
      }
      `;

      button.textContent = this.textContent;
      this.shadow.appendChild(style);
      this.shadow.appendChild(button);
    }
  }
  customElements.define("button-comp", ButtonComponent);
}
