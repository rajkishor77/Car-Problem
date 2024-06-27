const inventory = require("../index.js");
const getCarYearOlder = require("../p5.js");


try {
    const carYear = getCarYearOlder(inventory);
    console.log(carYear);
    console.log("Number of All older car less than 2000 is " ,carYear.length);
    
} catch (error) {
    console.log("Something went wrong");

}