
const inventory = require("../index.js");
const carWithId = require("../p1.js");

try {
    let carWithId33 = carWithId(inventory, 33);
    console.log(`Car 33 is a ${carWithId33.car_year} ${carWithId33.car_make} ${carWithId33.car_model}`);
} catch (error) {
    console.log("Something went wrong");
}

