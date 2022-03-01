import { initPageHome } from "./pages/home";
import { initPagePlay } from "./pages/play";
import { initPageGame } from "./pages/game";
import { initPageWin } from "./pages/result/win";
import { initPageLose } from "./pages/result/lose";
import { initPageTie } from "./pages/result/tie";

const routes = [
  {
    path: /\/home/,
    component: initPageHome,
  },
  {
    path: /\/play/,
    component: initPagePlay,
  },
  {
    path: /\/game/,
    component: initPageGame,
  },
  {
    path: /\/win/,
    component: initPageWin,
  },
  {
    path: /\/lose/,
    component: initPageLose,
  },
  {
    path: /\/tie/,
    component: initPageTie,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/home");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
