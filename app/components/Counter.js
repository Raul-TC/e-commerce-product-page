export function Counter() {
  const $containerCounter = document.createElement("div");

  $containerCounter.innerHTML = `
    <span class="minus"><img src="app/assets/icon-minus.svg" alt="minus-icon"></span>
   <span id="counter">0</span>
    <span class="plus"><img src="app/assets/icon-plus.svg" alt="minus-plus"></span>
    `;
  $containerCounter.classList.add("counter");
  return $containerCounter;
}
