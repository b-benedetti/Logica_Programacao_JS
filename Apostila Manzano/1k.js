var resp = "s";
var total = 0;
var resp = prompt("Digite o cômodo que você deseja saber a área");

while (resp != "não") {
    var x = parseFloat(prompt("Digite o valor do comprimento"));
    var y = parseFloat(prompt("Digite o valor da largura"));
    total = total + (x * y);
    resp = prompt("Digite o cômodo que você deseja saber a área");
}
document.write("A soma da área é de: " + total);