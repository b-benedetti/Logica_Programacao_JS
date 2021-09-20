var grausF = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));

let grausC = (grausF - 32) * 5 / 9;

alert("a temperatura em graus Celsius é:" + grausC.toFixed(2))