var num1 = parseInt(prompt("Digite um valor"));
var num2 = parseInt(prompt("Digite um segundo valor"));
var num3 = parseInt(prompt("Digite um terceiro valor"));
if (num1 > num2 & num1 > num3) {
    alert("Número " + num1 + " é o maior");
} else if (num2 > num3 & num2 > num1) {
    alert("Número " + num2 + " é o maior");
} else {
    alert("Número " + num3 + " é o maior");
}