import { Carrousel } from "./Carrousel.js";
import { ImageMain } from "./ImageMain.js";
import { ImagesSlide } from "./ImagesSlide.js";

export function Modal() {
  const $modalDiv = document.createElement("div");

  $modalDiv.classList.add("modal", "none");

  $modalDiv.appendChild(Carrousel());
  $modalDiv.appendChild(ImagesSlide());

  return $modalDiv;
}
