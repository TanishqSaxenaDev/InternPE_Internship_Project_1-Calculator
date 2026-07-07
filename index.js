const historyEl = document.getElementById("history");
const resultEl = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let expression = "";
let resultShown = false;

function updateDisplay() {
  historyEl.textContent = expression;
  resultEl.textContent = expression || "0";
}

function appendValue(value) {
  if (resultShown && /[0-9.]/.test(value)) {
    expression = "";
  }
  resultShown = false;

  const lastChar = expression.slice(-1);
  const operators = "+-*/%";

  if (value === ".") {
    const lastNumber = expression.split(/[-+*/%]/).pop();
    if (lastNumber.includes(".")) return;
    if (!lastNumber) expression += "0";
  }

  if (operators.includes(value) && operators.includes(lastChar)) {
    expression = expression.slice(0, -1) + value;
  } else {
    expression += value;
  }

  updateDisplay();
}

function clearAll() {
  expression = "";
  resultShown = false;
  updateDisplay();
}

function deleteLast() {
  if (resultShown) {
    clearAll();
    return;
  }
  expression = expression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  if (!expression.trim()) return;
  try {
    let safeExpression = expression.replace(/÷/g, "/").replace(/×/g, "*");
    let result = Function("return (" + safeExpression + ")")();
    if (!Number.isFinite(result)) throw new Error("Invalid result");
    expression = String(parseFloat(result.toFixed(10)));
    resultShown = true;
    historyEl.textContent = "";
    resultEl.textContent = expression;
  } catch (e) {
    expression = "";
    resultShown = false;
    historyEl.textContent = "Error";
    resultEl.textContent = "0";
    setTimeout(() => {
      historyEl.textContent = "";
    }, 1200);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const { value, action } = button.dataset;
    if (value) appendValue(value);
    if (action === "clear") clearAll();
    if (action === "delete") deleteLast();
    if (action === "equals") calculate();
  });
});

document.addEventListener("keydown", (e) => {
  const allowed = "0123456789+-*/.%";
  if (allowed.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearAll();
  }
});

updateDisplay();
