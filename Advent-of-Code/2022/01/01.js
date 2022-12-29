const { input } = require("./input");

const sortElfsByCaloriesHL = input.map((lines) => {
  const caloriesByElf = [];
  let sumOfCaloriesForCurrentElf = 0;
  let ElfNumber = 0;

  lines.split(/\r\n/).forEach((calorie) => {
    if (calorie == "") {
      sumOfCaloriesForCurrentElf = 0;
      ElfNumber++;
    } else
      caloriesByElf[ElfNumber] = sumOfCaloriesForCurrentElf += parseInt(
        calorie,
        10
      );
  });

  return caloriesByElf.sort((a, z) => z - a);
});

const MostCalorieElf = sortElfsByCaloriesHL[0][1];

const sumTop3ElfsMostCalories = sortElfsByCaloriesHL[0]
  .slice(0, 3)
  .reduce((a, b) => a + b, 0);
