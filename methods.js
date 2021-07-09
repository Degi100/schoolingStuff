var colors = require('colors');

const sep = (arg) => console.log(`------${arg}------`.bold.blue.bold.bgWhite);

// .join() 
// https://www.w3schools.com/jsref/jsref_join.asp
sep('.join')
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

console.log(joinMethods.yellow);

sep('.contact')
//.concat() 
// https://www.w3schools.com/jsref/jsref_concat_array.asp

let concatArr1 = ["Concat-0"];
let concatArr2 = ["Concat-1", "Concat-2"];
let concatArr3 = ["Concat-3", "Concat-4", "Concat-4"];
concatMethods = methodsArr
  .concat(concatArr1, concatArr2, concatArr3)
  .join("(), ");

console.log(concatMethods.magenta);

sep('.copyWithin')
//.copyWithin()
// https://www.w3schools.com/jsref/jsref_copywithin.asp

let copyWithinMethods = methodsArr;
copyWithinMethods.copyWithin(1, 2);

console.log (copyWithinMethods);

sep('.entries')
//.entries()
//https://www.w3schools.com/jsref/jsref_entries.asp
const entriesMethods = methodsArr.entries();
for (let result of entriesMethods) {
  // console.log(result)
  console.log(result.join(". "));
};

sep('.fill')
//.fill()
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_fill2
const fillMethods = methodsArr;
fillMethods.fill("FILL!!!", 2, 15);
console.log(fillMethods);
sep()

