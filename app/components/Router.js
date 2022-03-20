import { Counter } from "../helpers/Counter.js";
import { Slider } from "../helpers/Slider.js";
import { Carrousel } from "./Carrousel.js";
import { LeftSide } from "./LeftSide.js";
import { Modal } from "./ModalImages.js";
import { RightSide } from "./RightSide.js";

export function Router() {
  const $main = document.getElementById("main");
  let { hash } = location;

  if (!hash || hash === "#/") {
    $main.appendChild(LeftSide());
    $main.appendChild(RightSide());
    $main.appendChild(Modal());
    Counter();
    Slider();
  } else {
    $main.innerHTML = `<h2>Else</h2>`;
  }
}
