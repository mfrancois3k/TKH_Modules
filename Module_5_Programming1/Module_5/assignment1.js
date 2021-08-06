  
const weeklyIncome = parseInt(prompt("Weekly Salary:"));
const foodCost = parseInt(prompt("Weekly Food Cost:"));
const housingCost = parseInt(prompt("Weekly Rent:"));
const transCost = parseInt(prompt("Weekly Transportation Cost:"));
const otherCost = parseInt(prompt("Other Weekly Costs:"));
const yearlySave = parseInt(
  prompt("How much would you want to save in a year? :")
);
const saveWeekly = yearlySave / 52;
const totalWeeklyCost = foodCost + housingCost + transCost + otherCost;
const leftOverWeekly = weeklyIncome - totalWeeklyCost;

if (leftOverWeekly > saveWeekly) {
  console.log("You are on the right track!!!");
} else {
  console.log(
    `You need to save $${(saveWeekly - leftOverWeekly).toFixed(
      2
    )} more a week to meet that goal.`
  );
}