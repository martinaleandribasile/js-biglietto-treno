console.log("Esercizio Biglietto");

const tag = document.getElementById("tag");
const bonus = document.getElementById("bonus");
const priceBonus = document.getElementById("pricebonus")
const kmPercorso = parseInt(prompt("Quanti chilometri desidera percorrere?"));
console.log(kmPercorso);
const age = parseInt(prompt("Inserisci la tua eta' "));
console.log(age);

const price = kmPercorso * 0.21;
console.log(price)
tag.innerHTML = price.toFixed(2) + " &#8364;";
const sconto20 = price - (price * 20 / 100);
const sconto40 = price - (price * 40 / 100);

if (age < 18) {
    bonus.innerHTML = "Sconto del 20% ";
    priceBonus.innerHTML = sconto20.toFixed(2) + " &#8364;";
    tag.classList.add("styleline");
}

if (age >= 65) {
    bonus.innerHTML = "Sconto del 40% ";
    priceBonus.innerHTML = sconto40.toFixed(2) + " &#8364;";
    tag.classList.add("styleline");
}
