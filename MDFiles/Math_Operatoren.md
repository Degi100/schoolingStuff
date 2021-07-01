**Operatoren agieren auf Werten (den Operanden), um einen neuen Wert zu erzeugen.**

**Arithmetische Operatoren gehören zu den einfachsten Operatoren:**

3 + 2                      // => 5: Addition

3 - 2                      // => 1: Subtraktion

3 * 2                      // => 6: Multiplikation

3 / 2                      // => 1.5: Division

points[1].x - points[0].x  // => 1: Auch komplexere Operanden sind möglich.

"3" + "2"                  // => "32": + addiert Zahlen, verkettet Strings.

**JavaScript bietet einige arithmetische Kurzoperatoren:**

let count = 0;             // Variable definieren.

count++;                   // Variable inkrementieren.

count--;                   // Variable dekrementieren.

count += 2;                // 2 addieren, entspricht count = count + 2;.

count *= 3;                // Mit 3 multiplizieren, entspricht count = count * 3;.

count                      // => 6: Variablennamen sind ebenfalls Ausdrücke.

**siehe auch Logische_Operatoren.md**

// Gleichheits- und Relationsoperatoren prüfen, ob zwei Werte gleich, ungleich,

// kleiner als, größer als usw. sind. Sie werden zu true oder false ausgewertet.


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

// Logische Operatoren kombinieren oder invertieren boolesche Werte:

(x === 2) && (y === 3)     // => true: Beide Vergleiche sind wahr. && ist AND (UND).

(x > 3) || (y < 3)         // => false: Keiner der Vergleiche ist wahr.

// || ist OR (ODER).

!(x === y)                 // => true: ! invertiert einen booleschen Wert.