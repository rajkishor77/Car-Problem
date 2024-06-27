const inventory = require("../index.js");
const getLastCar = require("../p2.js");


try {
     let lastCar = getLastCar(inventory);
     console.log(`Last car is a ${lastCar.car_make} & model is ${lastCar.car_model}`)
    
} catch (error) {
    console.log("Something went wrong");
}