var colors = require('colors');

const sep = (arg) => console.log(`------${arg}------`.bold.blue);

sep("TV Channels");
const tvChannels = ["ARD", "ZDF", "NDR", "Pro7", "RTL"];
const footballTeams = ["Werder Bremen", "Bayern München", "Hamburger SV"];
const cars = ['BMW', 'Mazda', 'Opel', 'Mercedes']

tvChannels.forEach((tvChannel) => {
  console.log(`${tvChannel} is stupid`);
});

sep("German Football Clubs");
footballTeams.forEach((footballTeam) => {
  console.log(`${footballTeam}`);
});

sep("Cars Brands");
cars.forEach((car) => {
  console.log(`${car}`);
});

const thatsSucks = tvChannel => console.log(`${tvChannel} ist doof !!!`);

tvChannels.forEach(thatsSucks);

sep("English Words");

const isEnglishWords = ['hello', 'world', 'topics', 'learn', 'choclate'];
 isEnglishWords.forEach((word) => {
   console.log(`${word} here we go`)
 })

sep("Drinks");
const isDrinks = ['Orange Juice', 'Water', 'Apple Juice', ];
isDrinks.forEach((drink) => {
  console.log(`${drink} Hello Drinks`)
})