let texto = "";
let i = 0;
while (i < 10) {
    texto += "<br>O número é " + i;
    i++;
}
document.getElementById("demo").innerHTML = texto;