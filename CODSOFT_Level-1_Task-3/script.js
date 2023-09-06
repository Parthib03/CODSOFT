const outputElement = document.getElementById("output");
let outputValue = "0";

function updateOutput() {
  outputElement.textContent = outputValue;
}

function clearOutput() {
  outputValue = "0";
  updateOutput();
}

function appendToOutput(value) {
  if (outputValue === "0") {
    outputValue = value;
  } else {
    outputValue += value;
  }
  updateOutput();
}

function calculateResult() {
  try {
    outputValue = eval(outputValue).toString();
    updateOutput();
  } catch (error) {
    outputValue = "Error";
    updateOutput();
  }
}

function calculateSin() {
  const radians = parseFloat(outputValue);
  outputValue = Math.sin(radians).toString();
  updateOutput();
}

function calculateCos() {
  const radians = parseFloat(outputValue);
  outputValue = Math.cos(radians).toString();
  updateOutput();
}

function calculateTan() {
  const radians = parseFloat(outputValue);
  outputValue = Math.tan(radians).toString();
  updateOutput();
}
