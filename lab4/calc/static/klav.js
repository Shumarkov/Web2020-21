var calc = document.querySelector(".calc-container");
  document.onkeydown = function (e) {
    switch (e.key) {
      case "(":
        calc.querySelector("tr:nth-child(2) td:nth-child(1)").click();
        break;
      case ")":
        calc.querySelector("tr:nth-child(2)  td:nth-child(2)").click();
        break;
      case "Backspace":
        calc.querySelector("tr:nth-child(2)  td:nth-child(4)").click();
        break;
      case "1":
        calc.querySelector("tr:nth-child(3) td:nth-child(1)").click();
        break;
      case "2":
        calc.querySelector("tr:nth-child(3)  td:nth-child(2)").click();
        break;
      case "3":
        calc.querySelector("tr:nth-child(3)  td:nth-child(3)").click();
        break;
      case "+":
        calc.querySelector("tr:nth-child(3)  td:nth-child(4)").click();
        break;
      case "4":
        calc.querySelector("tr:nth-child(4) td:nth-child(1)").click();
        break;
      case "5":
        calc.querySelector("tr:nth-child(4)  td:nth-child(2)").click();
        break;
      case "6":
        calc.querySelector("tr:nth-child(4)  td:nth-child(3)").click();
        break;
      case "-":
        calc.querySelector("tr:nth-child(4)  td:nth-child(4)").click();
        break;
      case "7":
        calc.querySelector("tr:nth-child(5) td:nth-child(1)").click();
        break;
      case "8":
        calc.querySelector("tr:nth-child(5)  td:nth-child(2)").click();
        break;
      case "9":
        calc.querySelector("tr:nth-child(5)  td:nth-child(3)").click();
        break;
      case "*":
        calc.querySelector("tr:nth-child(5)  td:nth-child(4)").click();
        break;
      case ".":
        calc.querySelector("tr:nth-child(6) td:nth-child(1)").click();
        break;
      case "0":
        calc.querySelector("tr:nth-child(6)  td:nth-child(2)").click();
        break;
      case "=":
      case "Enter":
        calc.querySelector("tr:nth-child(6)  td:nth-child(3)").click();
        break;
      case "/":
        calc.querySelector("tr:nth-child(6)  td:nth-child(4)").click();
        break;
    }
  };