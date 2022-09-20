const form = document.getElementById("calculator__form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const removeActive = () => {
  operators.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const clearButton = document.querySelector("button[type=reset]");

// Displaying the values of Operands
const output = document.getElementById("output");
const operands = document.querySelectorAll("button[data-type=operand]");

let isOperator = false;
operands.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clearButton.innerHTML = "C";
    removeActive();
    if (output.value == "0") {
      output.value = e.target.value;
    } else if (output.value.includes(".")) {
      output.value = `${output.value}${e.target.value.replace(".", "")}`;
    } else if (isOperator) {
      isOperator = false;
      output.value = e.target.value;
    } else {
      output.value = `${output.value}${e.target.value}`;
    }
  });
});

const operators = document.querySelectorAll("button[data-type=operator]");

let equation = [];
operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clearButton.innerHTML = "C";
    removeActive();
    e.currentTarget.classList.add("active");

    switch (e.target.value) {
      case "%":
        output.value = parseFloat(output.value) / 100;
        break;
      case "invert":
        output.value = parseFloat(output.value) * -1;
        break;
      case "=":
        equation.push(output.value);
        output.value = eval(equation.join(""));
        equation = [];
        break;
      default:
        let lastItem = equation[equation.length - 1];
        if (["/", "*", "+", "-"].includes(lastItem) && isOperator) {
          equation.pop();
          equation.push(e.target.value);
        } else {
          equation.push(output.value);
          equation.push(e.target.value);
        }
        isOperator = true;
        break;
    }
  });
});

clearButton.addEventListener("click", () => {
  clearButton.innerHTML = "AC";
  removeActive();
});
