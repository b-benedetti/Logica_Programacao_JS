var carrosVend = parseInt(prompt("Digite o número de carros vendidos"));
var salFixo = parseFloat(prompt("Digite o seu salário fixo"));

var comissao = parseFloat(prompt("Digite o valor da sua comissão:"));

var totalVenda = parseFloat(prompt("Digite o total de suas vendas"));

var comissaoCarro = comissao * carrosVend;

var comissao2 = totalVenda / 100 * 5;

var salFinal = comissaoCarro + comissao2 + salFixo;

alert("O salário final do vendedor é: R$" + salFinal);