var num = parseInt(prompt("Digite o número de maçãs compradas"));

if (num < 12 & num > 0) {
    alert(" Valor final: 1,30 * " + num + " = R$ " + num * 1.30);
} else {
    alert(" Valor final: 1,00 * " + num + " = R$ " + num);
}