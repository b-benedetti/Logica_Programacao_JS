var num1 = parseInt(prompt("Digite um valor"));
var num2 = parseInt(prompt("Digite um segundo valor"));
var num3 = parseInt(prompt("Digite um terceiro valor"));
if (num3 > num2 & num2 > num1) {
    alert("A ordem crescente dos números é : " + num1 + ", " + num2 + ", " + num3);
} else if (num2 > num3 & num3 > num1) {
    alert("A ordem crescente dos números é : " + num1 + ", " + num3 + ", " + num2);
} else if (num3 > num1 & num1 > num2) {
    alert("A ordem crescente dos números é : " + num2 + ", " + num1 + ", " + num3);
} else if (num2 > num1 & num1 > num3) {
    alert("A ordem crescente dos números é : " + num3 + ", " + num1 + ", " + num2);
} else if (num1 > num3 & num3 > num2) {
    alert("A ordem crescente dos números é : " + num2 + ", " + num3 + ", " + num1);
} else {
    alert("A ordem crescente dos números é : " + num3 + ", " + num2 + ", " + num1);
}