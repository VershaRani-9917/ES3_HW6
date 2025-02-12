// 1. Print temperature details
const printTemperature = ({ location, temperature }) =>
  `Location: ${location}, Temperature: ${temperature} degree celsius`;

console.log(printTemperature({ location: "New York", temperature: 15 }));
console.log(printTemperature({ location: "London", temperature: 10 }));

// 2. Print fruit details
const printFruit = ({ fruitName, fruitColor, inStock }) =>
  `Fruit Name: ${fruitName}, Fruit Color: ${fruitColor}, Available: ${inStock}`;

console.log(
  printFruit({ fruitName: "Apple", fruitColor: "Red", inStock: true })
);
console.log(
  printFruit({ fruitName: "Grapes", fruitColor: "Green", inStock: false })
);

// 3. Print student scores
const printStudentScores = ([name, ...scores]) =>
  `Student: ${name}, Scores: ${scores.join(", ")}`;

console.log(printStudentScores(["Alice", 90, 85, 95]));
console.log(printStudentScores(["Bob", 80, 75, 85]));

// 4. Print product details
const printProductDetails = ({ name, price }) =>
  `Product: ${name}, Price: $${price}`;

console.log(printProductDetails({ name: "Laptop", price: 899 }));
console.log(printProductDetails({ name: "Phone", price: 599 }));

// 5. Print person details with default values
const printPersonDetails = ({ name = "Anonymous", age = "Unknown" } = {}) =>
  `Name: ${name}, Age: ${age}`;

console.log(printPersonDetails({ name: "John", age: 30 }));
console.log(printPersonDetails({}));

// 6. Print city population details
const printCityPopulation = ([city, { population, country }]) =>
  `City: ${city}, Population: ${population}, Country: ${country}`;

console.log(
  printCityPopulation(["New York", { population: 8623000, country: "USA" }])
);
console.log(
  printCityPopulation(["Tokyo", { population: 37833000, country: "Japan" }])
);

// 7. Print car details
const printCarDetails = ([name, { model, price }]) =>
  `Name: ${name}, Model: ${model}, Price: Rs. ${price}`;

console.log(
  printCarDetails(["All-Terrain SUV", { model: "SUV", price: 4500000 }])
);
console.log(
  printCarDetails(["GreenDrive Electric", { model: "Electric", price: 500000 }])
);
