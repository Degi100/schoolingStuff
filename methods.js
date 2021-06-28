console.log(
  "********************************************************************************"
);

// .join() 
// https://www.w3schools.com/jsref/jsref_join.asp

console.log("");
let methodsArr = [
  "concat", // done
  "constructor",
  "copyWithin", // done
  "entries", //done
  "every",
  "fill", //done
  "filter",
  "find",
  "findIndex",
  "forEach",
  "from",
  "includes",
  "indexOf",
  "isArray",
  "join",
  "keys",
  "length",
  "lastIndexOf",
  "map",
  "pop",
  "prototype",
  "push",
  "reduce",
  "reduceRight",
  "reserve",
  "shift",
  "slice",
  "some",
  "sort",
  "splice",
  "toString",
  "unshift",
  "valueOf",
];
joinMethods = methodsArr.join("(), ");

console.log("\x1b[33m" + "METHODS.JOIN: " + joinMethods);
console.log(
  "********************************************************************************"
);

//.concat() 
// https://www.w3schools.com/jsref/jsref_concat_array.asp

let concatArr1 = ["Concat-0"];
let concatArr2 = ["Concat-1", "Concat-2"];
let concatArr3 = ["Concat-3", "Concat-4", "Concat-4"];
concatMethods = methodsArr
  .concat(concatArr1, concatArr2, concatArr3)
  .join("(), ");

console.log("\x1b[32m" + "METHODS.Concat: " + concatMethods);
console.log(
  "********************************************************************************"
);

//.copyWithin()
// https://www.w3schools.com/jsref/jsref_copywithin.asp

let copyWithinMethods = methodsArr;
copyWithinMethods.copyWithin(1, 2);

console.log("\x1b[33m" + "METHODS.copyWithin: " + copyWithinMethods);
console.log(
  "********************************************************************************"
);

//.entries()
//https://www.w3schools.com/jsref/jsref_entries.asp
const entriesMethods = methodsArr.entries();
for (let result of entriesMethods) {
  // console.log(result)
  console.log("\x1b[36m" + "METHODS.entries: " + result.join(". "));
}
console.log(
  "********************************************************************************"
);

//.fill()
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_fill2
const fillMethods = methodsArr;
fillMethods.fill("FILL!!!", 2, 25);
console.log("\x1b[33m" + "METHODS.FILL: " + fillMethods);
console.log(
  "********************************************************************************"
);

