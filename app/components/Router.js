import { Counter } from "../helpers/Counter.js";
import { Carrousel } from "./Carrousel.js";
import { LeftSide } from "./LeftSide.js";
import { Modal } from "./ModalImages.js";
import { RightSide } from "./RightSide.js";

export function Router() {
  const $main = document.getElementById("main");
  let { hash } = location;

  if (!hash || hash === "#/") {
    $main.appendChild(LeftSide());
    $main.appendChild(Modal());
    $main.appendChild(RightSide());
    Counter();
  } else {
    $main.innerHTML = `<h2>Else</h2>`;
  }
}
