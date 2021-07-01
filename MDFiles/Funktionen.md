***Funktionen sind parametrisierte Blöcke mit JavaScript-Code, die wir aufrufen können. In ES6 und späteren Versionen gibt es eine Kurzschriftsyntax für die Definition von Funktionen. Diese prägnante Syntax verwendet =>, um die Argumentliste vom Funktionskörper zu trennen, daher werden auf diese Weise definierte Funktionen als Pfeilfunktionen bezeichnet. Pfeilfunktionen werden am häufigsten eingesetzt, wenn eine unbenannte Funktion als Argument an eine andere Funktion übergeben werden soll.*** 

**Verwendet man Pfeilfunktionen, sieht der vorhergehende Code so aus:**

const plus1 = x => x + 1;   // Die Eingabe x wird auf die Ausgabe x + 1 abgebildet.

const square = x => x * x;  // Die Eingabe x wird auf die Ausgabe x * x abgebildet.

plus1(y)                    // => 4: Funktionen werden wie sonst auch aufgerufen.

square(plus1(y))            // => 16

**Wenn wir Funktionen mit Objekten verwenden, erhalten wir Methoden:**
let a = [];                // Ein leeres Array anlegen.

a.push(1,2,3);             // Die Methode push() fügt einem Array Elemente hinzu.

a.reverse();               // Eine weitere Methode: die Reihenfolge der Elemente umkehren.

**Wir können auch eigene Methoden definieren. Das Schlüsselwort "this" bezieht sich auf das Objekt, für das die Methode definiert ist: hier das Array points aus einem vorhergehenden Beispiel.**

points.dist = function() { 	// Methode zum Berechnen des Abstands zwischen Punkten definieren.

let p1 = this[0];    		// Erstes Element des Arrays, auf dem die Methode aufgerufen wird.

let p2 = this[1];      // Zweites Element des Arrays "this".

let a = p2.x-p1.x;     // Differenz der x-Koordinaten.

let b = p2.y-p1.y;     // Differenz der y-Koordinaten.

return Math.sqrt(a*a + // Der Satz des Pythagoras.

b*b); // Math.sqrt() zieht die Wurzel.

};

points.dist()              // => Math.sqrt(2): Abstand zwischen unseren zwei Punkten.

**Werden Funktionen den Eigenschaften eines Objekts zugewiesen, nennen wir sie "Methoden". Alle JavaScript-Objekte (einschließlich Arrays) besitzen Methoden:**

**Zu den JavaScript-Anweisungen gehören auch bedingte Anweisungen und Schleifen, die eine aus C, C++, Java und anderen Sprachen bekannte Syntax nutzen.**


***Beispiel 1***

function abs(x) {         // Eine Funktion zur Berechnung des Absolutbetrags.

if (x >= 0) {        	 // Die if-Anweisung …

return x;         	 // … führt diesen Code aus, wenn der Vergleich wahr ist.

}                      	// Das Ende der if-Anweisung.

else {                 	// Die optionale else-Anweisung führt den in ihr enthaltenen Code

return -x;         	// aus, wenn der Vergleich falsch ist.

}                      	// Geschweifte Klammern sind optional, wenn es nur eine Anweisung gibt.

}                          ***// Beachten Sie die return-Anweisungen innerhalb von if/else.***

abs(-10) === abs(10)       // => true


***Beispiel 2***

function sum(array) {      // Berechnet die Summe der Elemente eines Arrays.

let sum = 0;           // Beginnt mit einer Anfangssumme von 0.

for(let x of array) {  // Schleife über das Array, wobei jedes Element x zugeordnet wird.

sum += x;          // Aktuellen Elementwert der Summe hinzufügen.

}                      // Das Ende der for-Schleife.

return sum;            // Die Summe zurückgeben.

}
sum(primes)                // => 28: Summe der ersten 5 Primzahlen 2+3+5+7+11.


***Beispiel 3***

function factorial(n) {    // Eine Funktion zur Berechnung von Fakultäten.

let product = 1;      	// Beginne mit dem Produkt von 1.

while(n > 1) {         // Wiederhole Anweisungen in {}, solange der Ausdruck in () wahr ist.

product *= n;      	// Kurzform für product = product * n.

n--;               	// Kurzform fürn=n -1.

}                      // Das Ende der while-Schleife.

return product;        // Rückgabe des Produkts.

}

factorial(4)               	// => 24: 1*4*3*2

***********************************************


function factorial2(n) {   	// Eine alternative Version, die eine andere Schleife verwendet.

let i, product = 1;    		// Beginne mit 1.

for(i=2; i <= n; i++)  		// i automatisch von 2 bis n inkrementieren.

product *= i;      		// Wird jedes Mal ausgeführt. {} wird für einzeilige Schleifen nicht benötigt.

return product;        		// Rückgabe der Fakultät.

}

factorial2(5)              // => 120: 1*2*3*4*5







**ECMA-Skript bis 2016**

function plus1(x) {        	// Funktion mit dem Namen "plus1" und dem Parameter "x" definieren.

return x + 1;         		 // Wert zurückgeben, der um eins größer ist als der übergebene Wert.

}                         	 // Funktionen sind in geschweifte Klammern eingeschlossen.

plus1(y)                   	// => 4: y ist (immer noch) 3, also gibtdieser Aufruf 3+1 zurück.

let square = function(x) { 	// Funktionen sind Werte und können Variablen zugewiesen werden.

return x * x;         		// Funktionswert berechnen.

};                        	// Semikola kennzeichnen das Ende der Zuweisung.

square(plus1(y))           	// => 16: Zwei Funktionen in einem Ausdruck aufrufen.