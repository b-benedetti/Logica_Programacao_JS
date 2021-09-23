var acumulador = 1;
aux = 3;
var cont = 0;
var base = parseInt(prompt("Digite o valor da base"));
var exp = parseInt(prompt("Digite o valor do exponente"));


while (cont <= exp) {
    if (cont == 0) {
        document.write("<br>" + base + " elevado a " + cont + " = 1");
    } else {
        acumulador = acumulador * base;
        document.write("<br>" + base + " elevado a " + cont + " = " + acumulador);
    }
    cont++;
}