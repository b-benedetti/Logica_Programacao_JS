var comeco = 50;
var acumulador = 0;
nValor = 0;

while (comeco <= 70) {
    if (comeco % 2 == 0) {
        acumulador += comeco;
        nValor++;
    }
    comeco++;
}
document.write("O valor é " + acumulador + ", logo, o valor da média será igual a " + (acumulador / nValor));