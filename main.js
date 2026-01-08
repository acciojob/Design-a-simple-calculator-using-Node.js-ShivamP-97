// Calculator program in Node.js

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Error: Division by zero");
  }
  return num1 / num2;
}

function calculator() {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
      rl.question(
        "Enter operation (add, subtract, multiply, divide): ",
        (operation) => {
          const a = Number(num1);
          const b = Number(num2);

          try {
            let result;
            switch (operation) {
              case "add":
                result = add(a, b);
                break;
              case "subtract":
                result = subtract(a, b);
                break;
              case "multiply":
                result = multiply(a, b);
                break;
              case "divide":
                result = divide(a, b);
                break;
              default:
                console.log("Invalid operation");
                rl.close();
                return;
            }
            console.log("Result:", result);
          } catch (error) {
            console.log(error.message);
          }

          rl.close();
        }
      );
    });
  });
}

module.exports = { add, subtract, multiply, divide };
