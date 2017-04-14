function addASingleDivYo() {
    var aSingleDivYo = document.createElement("div");
    aSingleDivYo.className ="whatever";
    document.body.appendChild(aSingleDivYo);

}


for (var t = 0; t < 4; t++) {
    addASingleDivYo();

}

var t = 0;
do {
    addASingleDivYo();
    t++;
} while (t < 4);

var t = 0;
while ( t < 4) {
    addASingleDivYo();
    t++;
}