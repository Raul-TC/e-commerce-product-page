import { LeftSide } from "./LeftSide.js";

export function Router() {
  const $main = document.getElementById("main");
  let { hash } = location;

  if (!hash || hash === "#/") {
    $main.appendChild(LeftSide());
  } else {
    $main.innerHTML = `<h2>Else</h2>`;
  }
}
