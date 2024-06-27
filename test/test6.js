const inventory = require("../index.js");
const getBMWAndAudi = require("../p6.js");


try {
    
     const bmwAndAudi = getBMWAndAudi(inventory);
     console.log(bmwAndAudi);

} catch (error) {
    console.log("Something went wrong");
}