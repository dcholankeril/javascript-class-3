function addASingleDivYo() {
    var aSingleDivYo = document.createElement("div");
    aSingleDivYo.className = "whatever";
    document.body.appendChild(aSingleDivYo);

}

// h2, h3, p
// h2 = 'color of your first car/something';
// h3 = do you wear glasses (yes/no)
// p ='fav food'
// order of h2, h3, p

function name() {
    var myName = document.createElement("h1");
    myName.innerText = "Diana";
    document.body.appendChild(myName);
}

function car() {
    var myCar = document.createElement("h2");
    myCar.innerText = "dark grey";
    document.body.appendChild(myCar)
}

function glasses() {
    var myGlasses = document.createElement("h3");
    myGlasses.innerText = "yes";
    document.body.appendChild(myGlasses)
}

function food() {
    var favFood = document.createElement("p");
    favFood.innertext = "icecream";
    document.body.appendChild(favFood)
}

name();
car();
glasses();
food();

// for (var t = 0; t < 4; t++) {
//    addASingleDivYo();
//
//}

// var t = 0;
// do {
//    addASingleDivYo();
//    t++;
// } while (t < 4);

// var t = 0;
// while (t < 4) {
//     addASingleDivYo();
//     t++;
// }
