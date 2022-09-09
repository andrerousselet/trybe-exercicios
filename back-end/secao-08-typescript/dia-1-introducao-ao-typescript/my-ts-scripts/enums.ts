import readline from 'readline-sync';

enum Months {
  january = 'january',
  february = 'february',
  march = 'march',
  april = 'april', 
  may = 'may',
  june = 'june',
  july = 'july',
  august = 'august',
  september = 'september',
  october = 'october',
  november = 'november',
  december = 'december',
}

// console.log(Months)

// ---------------

enum Seasons {
  autumn = 'autumn',
  winter = 'winter',
  spring = 'spring',
  summer = 'summer',
}

// console.log(Seasons);

// ---------------

const months = Object.values(Months);

const chosenMonth = readline.keyInSelect(months, 'Escolha um mês: ');

const northSeasons = {
  [Seasons.autumn]: [Months.september, Months.october, Months.november, Months.december],
  [Seasons.winter]: [Months.december, Months.january, Months.february, Months.march],
  [Seasons.spring]: [Months.march, Months.april, Months.may, Months.june],
  [Seasons.summer]: [Months.june, Months.july, Months.august, Months.september],
}

const southSeasons = {
  [Seasons.autumn]: northSeasons[Seasons.spring],
  [Seasons.winter]: northSeasons[Seasons.summer],
  [Seasons.spring]: northSeasons[Seasons.autumn],
  [Seasons.summer]: northSeasons[Seasons.winter],
}

const hemispheres = {
  north: northSeasons,
  south: southSeasons,
}

const chosenHemisphere = readline.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério: ')

const chosenSeasons = Object.values(hemispheres)[chosenHemisphere];

const seasons = Object.entries(chosenSeasons)
  .map((entry) => {
    if (entry[1].includes(months[chosenMonth])) return entry[0];
  })
  .filter((season) => season);

console.log(`\nChosen month: ${months[chosenMonth]}`);
console.log(`\nChosen hemisphere: ${Object.keys(hemispheres)[chosenHemisphere]}`);
console.log(`\nSeasons containing chosen month: ${seasons}`);
