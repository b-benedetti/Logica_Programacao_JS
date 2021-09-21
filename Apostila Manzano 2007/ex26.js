var qtdEst = parseInt(prompt("Digite a quantidade atual em estoque"));
var qtdMax = parseInt(prompt("Digite a quantidade máxima em estoque"));
var qtdMin = parseInt(prompt("Digite a quantidade mínima em estoque"));
var qtdMedia;
qtdMedia = (qtdMax + qtdMin) / 2;
if (qtdEst >= qtdMedia) {
    alert("Não efetuar a compra")
} else {
    alert("Efetuar compra")
}