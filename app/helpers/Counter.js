export function Counter() {
  const $count = document.getElementById("counter");
  let plus = 0;
  document.addEventListener("click", (e) => {
    function countPlus(suma) {
      return ($count.textContent = suma);
    }
    if (e.target.matches(".plus") || e.target.matches(".plus *")) {
      plus++;
      countPlus(plus);
    }
    if (e.target.matches(".minus") || e.target.matches(".minus *")) {
      plus--;
      countPlus(plus);

      if (plus < 0) {
        plus = 0;
        countPlus(plus);
      }
    }
    let multi = 125 * plus;

    if (e.target.matches(".addToCart") || e.target.matches(".addToCart *")) {
      if ($count.textContent === 0) {
        return;
      }

      document.querySelector(".cartEmpty").classList.add("none");

      document.getElementById("countElements").textContent = plus;
      document.querySelector(".countCart").textContent = plus;
      document.getElementById("totalPrice").textContent = `$${multi}.00`;
      document.querySelector(".elementsCart").classList.remove("none");
    }

    if (e.target.matches(".trash")) {
      plus = 0;
      document.querySelector(".elementsCart").classList.add("none");
      document.querySelector(".cartEmpty").classList.remove("none");
      $count.textContent = 0;
      document.querySelector(".countCart").textContent = 0;
    }
  });
}
