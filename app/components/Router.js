import { Carrousel } from "./Carrousel.js";
import { LeftSide } from "./LeftSide.js";
import { Modal } from "./ModalImages.js";

export function Router() {
  const $main = document.getElementById("main");
  let { hash } = location;

  if (!hash || hash === "#/") {
    $main.appendChild(LeftSide());
    $main.appendChild(Modal());
  } else {
    $main.innerHTML = `<h2>Else</h2>`;
  }
}
