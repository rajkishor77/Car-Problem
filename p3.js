// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.


function getCarModelAlphabetically(inventory){

    let carModel = [];
       for (let i = 0; i < inventory.length; i++){
           carModel.push(inventory[i].car_model);
       }
       carModel.sort();
       return carModel;
}


module.exports = getCarModelAlphabetically;