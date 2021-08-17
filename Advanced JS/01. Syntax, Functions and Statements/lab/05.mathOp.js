function doMath(n1, n2, op) {
  let actions = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
    "**": (a, b) => a ** b,
  };
  let result = actions[op](n1, n2);
  console.log(result);
}

doMath(3, 2, '**')
