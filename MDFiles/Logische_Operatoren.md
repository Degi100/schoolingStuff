**Gleichheits- und Relationsoperatoren prüfen, ob zwei Werte gleich, ungleich, kleiner als, größer als usw. sind. Sie werden zu true oder false ausgewertet.**

let x = 2, y = 3;          // Diese =-Zeichen sind Zuweisungen, keine Gleichheitstests.

x === y                    // => false: Gleichheit.

x !== y                    // => true: Ungleichheit.

x < y                      // => true: kleiner als.

x <= y                     // => true: kleiner als oder gleich.

x > y                      // => false: größer als.

x >= y                     // => false: größer als oder gleich.

"two" === "three"          // => false: Die beiden Strings sind verschieden.

"two" > "three"            // => true: "tw" ist alphabetisch größer als "th".

false === (x > y)          // => true: false ist gleich false.

 **Logische Operatoren kombinieren oder invertieren boolesche Werte:**

(x === 2) && (y === 3)     // => true: Beide Vergleiche sind wahr. && ist AND (UND).

(x > 3) || (y < 3)         // => false: Keiner der Vergleiche ist wahr.

// || ist OR (ODER).

!(x === y)                 // => true: ! invertiert einen booleschen Wert.