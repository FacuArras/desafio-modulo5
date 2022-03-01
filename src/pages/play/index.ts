export function initPagePlay(params) {
  const div = document.createElement("div");
  div.classList.add("home");
  div.innerHTML = `
        <text-comp tag="h2">Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-comp> 
        <button-comp class="home__button">¡Jugar!</button-comp>
        <div class="hands__container">
          <hands-comp tag="scissors"></hands-comp>
          <hands-comp tag="rock"></hands-comp>
          <hands-comp tag="paper"></hands-comp>
        </div>
        `;

    const buttonEl = div.querySelector("button-comp");
    buttonEl.addEventListener("click", () => {
      params.goTo("/game");
    });

  return div;
}
