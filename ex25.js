var numConta = +(prompt("Digite o número da sua conta"));
var saldo = +(prompt("Digite o seu saldo"));
var cred = +(prompt("Digite o seu crédito"));
var deb = +(prompt("Digite o seu débito"));
var saldoAt;
saldoAt = saldo - deb + cred;
if (saldoAt >= 0) {
    alert("O saldo é positivo.")
} else {
    alert("O saldo é negativo.")
}