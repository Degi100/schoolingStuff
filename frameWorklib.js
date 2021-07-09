const frameWorks = [
  {
    title: "React",
    info: "JS Libery for building user interface",
    web: "https://reactjs.org/",
    ranking: 1,
    alreadyUsed: true,
  },
  {
    title: "NodeJS",
    info: "JS Runtime built on Chrome V8 JS Engine",
    web: "https://nodejs.org/en/",
    ranking: 2,
    alreadyUsed: true,
  },
  {
    title: "AngularJS",
    info: "End-to-End Framework (out of the box)",
    web: "https://angularjs.org/",
    ranking: 3,
    alreadyUsed: false,
  },
  {
    title: "VueJS",
    info: "progressive JS Framework",
    web: "https://vuejs.org/",
    ranking: 4,
    alreadyUsed: true,
  },
  {
    title: "NextJS",
    info: "The React Framework for Production",
    web: "https://nextjs.org/",
    ranking: 5,
    alreadyUsed: false,
  },
  {
    title: "ExpressJS",
    info: "Fast, Nnopinionated Minimalist Web Framework",
    web: "https://expressjs.com/de/",
    ranking: 6,
    alreadyUsed: false,
  },
  {
    title: "Meteor",
    info: "built JS Applications faster with Meteor",
    web: "https://www.meteor.com/",
    ranking: 7,
    alreadyUsed: false,
  },
  {
    title: "Svelte",
    info: "Cybernetically enhanced web apps",
    web: "https://svelte.dev/",
    ranking: 8,
    alreadyUsed: false,
  },
  {
    title: "EmberJS",
    info: "A framework for ambitious web developers.",
    web: "https://emberjs.com/",
    ranking: 9,
    alreadyUsed: false,
  },
  {
    title: "Koa",
    info: "The next generation web framework for node.js",
    web: "https://koajs.com/",
    ranking: 10,
    alreadyUsed: false,
  },
];

for (frameWork of frameWorks) {
  frameWork.alreadyUsed
    ? console.log(
        (FgGreen =
          "\x1b[32m" +
          `You Used ${frameWork.title} from ${frameWork.web} || ${frameWork.info} || Ranking: ${frameWork.ranking}`)
      )
    : console.log(
        (FgRed =
          "\x1b[31m" +
          `You never Used ${frameWork.title} from ${frameWork.web} || ${frameWork.info} || Ranking: ${frameWork.ranking}`)
      );
}

// https://codecoda.com/de/blog/entry/die-zehn-beliebtesten-javascript-frameworks-2020
