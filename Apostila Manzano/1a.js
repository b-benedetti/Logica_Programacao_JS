var  num  =   (prompt("Digite um número"));
var  cont  =  1;
let  texto  =  "";
while  (cont  <=  10)  {    
    var  resultado  =  num  *  cont;    
    texto  +=  "<br>"  +  num  +  " * "  +  cont  +  " = "  +  resultado;    
    cont++;
}
document.getElementById("demo").innerHTML  =  texto;