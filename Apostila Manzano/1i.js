var valor;
var soma = 0;
var cont = 0;
while (cont < 10) {
    valor = parseInt(prompt("Digite um total de valores, que serão somados e divididos no final"));
    soma = soma + valor;
    cont++;
}
document.write("O total é " + soma + " e dividindo por 10 resulta em " + (soma / 10));