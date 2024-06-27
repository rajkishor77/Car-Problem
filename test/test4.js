const inventory = require("../index.js");
const getCarYear = require("../p4.js");



try {
    const carYear = getCarYear(inventory);
    console.log(carYear);
    
} catch (error) {
    console.log("Something went wrong");

}


