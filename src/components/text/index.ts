export function initTextComp() {
  class TextComponent extends HTMLElement {
    shadow: ShadowRoot;
    tags: string[] = ["h1", "h2", "p", "span", "h3", "h4", "h5"];
    tag: string = "h2";

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
        .h1 {
          font-size: 90px;
          font-family: "Lilita One", cursive;
          font-weight: 700;
          color: #009048;
          text-align: center;
        }
        .h2{
          font-size: 50px;
          text-align: center;
          font-weight: 600;
          margin: 0;
        }  
        @media (min-width:680px){
          .h2{
            font-size: 60px;
            padding: 0 22%;
          }
        }
        .p{
          font-size: 45px;
          color: #d8fcfc;
        }
        .span{
          font-size: 90px;
          font-family: "Lilita One", cursive;
          font-weight: 700;
          color: #91ccaf;
          text-align: center;
        }
        .h3{
          font-size: 55px;
          text-align: center;
          margin: 0 0 20px 0;
        }
        .h4{
          font-size: 45px;
          text-align: right;
          margin: 0;
        }
        .h5{
          font-size: 100px;
          font-weight: 700;
          text-align: center;
        }
        `;

      this.shadow.appendChild(style);
      this.render();
    }

    render() {
      const textelement = document.createElement(this.tag);
      const div = document.createElement("div");
      div.classList.add("h1");

      if (this.tag == "h1") {
        div.innerHTML = `        
            Piedra, <br />
            Papel <text-comp tag="span">Ó</text-comp> <br />
            Tijera
          `;

        this.shadow.appendChild(div);
      } else {
        this.shadow.appendChild(textelement);
      }

      textelement.className = this.tag;
      textelement.textContent = this.textContent;
    }
  }
  customElements.define("text-comp", TextComponent);
}
