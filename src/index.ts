import { initRouter } from "./router";
import { initTextComp } from "./components/text";
import { initButtonComp } from "./components/button";
import { initHandsComp } from "./components/hands";
import { state } from "./state";

(function () {
  const root = document.querySelector(".root");
  initRouter(root);
  initTextComp();
  initButtonComp();
  initHandsComp();
  state.init();
})();
