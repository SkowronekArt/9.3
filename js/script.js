/*
Zadanie: Velociraptor czy Triceratops


1.	Poniższy tekst przypisz do zmiennej text:
Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.

2.	To nie jest prawda. Powyższe zdanie dotyczy Triceratopsa :)

3.	Zadeklaruj nową zmienną o nazwie `dinosaur` zawierającą tekst 'triceratops' , 
4.	a następnie spraw, by stał się on 'UPPERCASE', czyli składał się z wielkich liter.
5.	Następnie zamień 'Velociraptor' w tekście ze zmiennej 'text' na wartość zmiennej 'dinosaur', używając wbudowanych funkcji napisów.
6.	Na koniec wyświetl za pomocą console.log() tylko pierwszą połowę otrzymanego zdania (length/2), również z użyciem funkcji napisów.

Spodziewany wynik to:
TRICERATOPS is a genus of herbivorous ceratopsid dinosaur that first app

7.	Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej. Pamiętaj o udostępnieniu repozytorium swojemu mentorowi.

*/


var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var toUpperCaseDinosaur = dinosaur.toUpperCase();
var textAfterCorrection = text.replace('Velociraptor', toUpperCaseDinosaur);
var halfTextAfterCorrection = textAfterCorrection.length / 2;
var halfTextAfterCorrectionConsole = textAfterCorrection.slice(0, halfTextAfterCorrection);




console.log(text);
console.log(dinosaur);
console.log(toUpperCaseDinosaur);
console.log(textAfterCorrection);
console.log(halfTextAfterCorrection);
console.log(halfTextAfterCorrectionConsole);


