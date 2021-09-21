var num1 = parseFloat(prompt("Digite a 1°nota"));
var num2 = parseFloat(prompt("Digite a 2° nota"));

if (((num1 + num2) / 2) >= 6) {
    alert(" Aprovado : " + ((num1 + num2) / 2));
} else {
    alert(" Reprovado : " + ((num1 + num2) / 2));
}