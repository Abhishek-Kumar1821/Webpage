const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        // Replace symbols with JS equivalents
        let expression = display.value
          .replace(/π/g, "Math.PI")
          .replace(/√/g, "Math.sqrt")
          .replace(/sin/g, "Math.sin")
          .replace(/cos/g, "Math.cos")
          .replace(/tan/g, "Math.tan")
          .replace(/log/g, "Math.log10")
          .replace(/\^/g, "");

        display.value = eval(expression);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (/[0-9+\-*/().]/.test(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      let expression = display.value
        .replace(/π/g, "Math.PI")
        .replace(/√/g, "Math.sqrt")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/log/g, "Math.log10")
        .replace(/\^/g, "");
      display.value = eval(expression);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    display.value = "";
  }
});