let car = {
  color: "",
  make: "Chevrolet",
  amountDoors: 2,
  miles: 1200,
  transmission: "manual",
  model: "Mustang",
  year: 2005,
  drive: function () {
    console.log("Vroom Vroom");
  },
  get trans() {
    return this.transmission;
  },
  set updateColor(color) {
    this.color = color;
  },
};

let team = {
  name: "NYCFC",
  city: "New York City",
  colors: ["white", "blue"],
  seasonWins: 9,
  rosterCount: 27,
  win: function () {
    this.seasonWins = 1 + this.seasonWins;
  },
  get isFrom() {
    return this.city;
  },
  set rosterUpdate(playerCount) {
    this.rosterCount = playerCount;
  },
};

let animal = {
  name: "Olivia",
  type: "dog",
  breed: "morkie",
  weightLbs: 15,
  ageYrs: 5,
  color: ["black", "brown"],
  faveToy: "plushMonkey",
  sleep: function () {
    console.log("ZZzzz");
  },
  hasOwner: null,
  get weight() {
    return this.weightLbs;
  },
  set adopted(boolean) {
    this.hasOwner = boolean;
  },
};
