let counterA;
for (let counterA = 1; counterA < 6; counterA += 1) {
  console.log(counterA);
}
console.log("______________");


const forSchleife = (num) => {
  result = 0;
  for (let i = 0; i < 3; i += 1) {
    for (let k = 1; k < 3; k += 1) {
      for (let n = 2; n < 3; n += 2){
      result += num;
    }
  }
}
  return result;
};
console.log(forSchleife())


