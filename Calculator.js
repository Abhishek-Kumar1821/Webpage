let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "C") {
      display.value = "";
    } else if (btn.innerText === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += btn.innerText;
    }
  });
});