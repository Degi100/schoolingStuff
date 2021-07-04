**JavaScript unterstützt auch Arrays (numerisch indexierte Listen) mit Werten:**

let primes = [2, 3, 5, 7]; // Ein Array mit 4 Werten, begrenzt durch [ und ].

primes[0]                  // => 2: Das erste Element (Index 0) des Arrays.

primes.length              // => 4: Anzahl der Elemente im Array.

primes[primes.length-1]    // => 7: Das letzte Element des Arrays.

primes[4] = 9;             // Ein neues Element durch Zuweisen hinzufügen.

primes[4] = 11;            // Oder ein vorhandenes Element durch Zuweisen verändern.

let empty = [];            // [] ist ein leeres Array ohne Elemente.

empty.length               // => 0

**Arrays und Objekte können andere Arrays und Objekte enthalten:**

***Ein Array mit 2 Elementen.***
let points = [             	

{x: 0, y: 0},   // Jedes Element ist ein Objekt.

{x: 1, y: 1}

];

***Ein Objekt mit 2 Eigenschaften.***
let data = {                 	

trial1: [[1,2], [3,4]],  // Der Wert jeder Eigenschaft ist ein Array.

trial2: [[2,3], [4,5]]   // Die Elemente der Arrays sind Arrays.

};

**forOf Schleife - Array (siehe auch Schleifen/ loops)**
function sum(array) {      	// Berechnet die Summe der Elemente eines Arrays.

let sum = 0;           		// Beginnt mit einer Anfangssumme von 0.

for(let x of array) {  		// Schleife über das Array, wobei jedes Element x zugeordnet wird.

sum += x;         		// Aktuellen Elementwert der Summe hinzufügen.

}                 		 // Das Ende der for-Schleife.

return sum;           		 // Die Summe zurückgeben.

}

sum(primes)            		 // => 28: Summe der ersten 5 Primzahlen 2+3+5+7+11.




