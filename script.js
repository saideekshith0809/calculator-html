function add() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);

  document.getElementById("result").innerText =
    "Result: " + (n1 + n2);
}
function subtract() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
function multiply() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);

  document.getElementById("result").innerText =
    "Result: " + (n1 * n2);
}

  document.getElementById("result").innerText =
    "Result: " + (n1 - n2);
}

  function divide() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);

  if (n2 === 0) {
    document.getElementById("result").innerText =
      "Cannot divide by zero";
  } else {
    document.getElementById("result").innerText =
      "Result: " + (n1 / n2);
  }
}
