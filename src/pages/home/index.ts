export function initPageHome(params) {
  const div = document.createElement("div");
  div.classList.add("home");
  div.innerHTML = `
      <text-comp tag="h1"></text-comp> 
      <button-comp>Empezar</button-comp>
      <div class="hands__container">
        <hands-comp tag="scissors"></hands-comp>
        <hands-comp tag="rock"></hands-comp>
        <hands-comp tag="paper"></hands-comp>
      </div>
      `;

  const buttonEl = div.querySelector("button-comp");
  buttonEl.addEventListener("click", () => {
    params.goTo("/play");
  });

  return div;
}
