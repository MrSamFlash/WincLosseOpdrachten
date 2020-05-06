//Naam
let name = prompt("Wat is uw naam, vreemdeling?", ["Vul hier uw naam in!"]);

//Welkom
alert("Welkom " + name + ". Bent u er klaar voor?");

let startPosition = true;
//while (startPosition == true) {
//Nummer raden
let numYou = prompt("Ik heb een getal in mijn hoofd tussen 0 en 25... Wat denkt u dat het is?", []);
parseInt(numYou);

let numCom = Math.round(Math.random * 25);

if (numYou == numCom) {
    alert("Gefelicteerd, u heeft gewonnen!");
} else {
    alert("Helaas! U bent niet slimmer dan de computer!");
    let again = confirm("Wilt u het nog eens proberen?");
    //if (again) {
    //     startPosition == true;
    // } else {
    //     startPosition == false;
    // };
};
//}
alert("Bedankt voor het spelen " + name + ". Tot ziens!");


