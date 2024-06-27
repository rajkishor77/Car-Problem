const inventory = require("../index.js");
const getCarModelAlphabetically = require("../p3.js");


try {
     const carModel = getCarModelAlphabetically(inventory);
     console.log(carModel);
} catch (error) {
    console.log("Something went wrong");
}