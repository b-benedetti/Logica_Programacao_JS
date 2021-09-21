let dia;
switch (new Date().getDay()) {
    case 0:
        dia = "domingo";
        break;
    case 1:
        dia = "segunda-feira";
        break;
    case 2:
        dia = "terça-feira";
        break;
    case 3:
        dia = "quarta-feira";
        break;
    case 4:
        dia = "quinta-feira";
        break;
    case 5:
        dia = "sexta-feira";
        break;
    case 6:
        dia = "sábado";
}
document.getElementById("demo").innerHTML = "Hoje é " + dia + ".";