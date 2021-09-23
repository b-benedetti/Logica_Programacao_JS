var num = parseInt(prompt("Digite um número"));
var maior = num;
var menor = num;
while (num >= 0) {
    if (num > maior) {
        maior = num;
    } else if (num < menor) {
        menor = num;
    }
    num = parseInt(prompt("Digite um número"));
}
document.write("O maior valor é " + maior + ", " + "e o menor valor é " + menor + ".");