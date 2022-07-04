/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  // let isNum = [];
  // isNum = true;
  if(rolls === []){
    return true
  }
  for (const i of rolls) {
    if (typeof i !== "number") {
      return false;
    } else {
      return true
    }
    // } else if (isNum === rolls) {
    //   isNum = true;
    // }
  }
  return true
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  // 1. loop through the array to find the value
  // 2. once the value is found, return it
  // 3. if the value is not found, return `null`

  let isVal = null 

  for(roll of rolls){
    if(rolls.includes(value)){
      isVal = value
    }
  }
  return isVal
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */

// 1. declare an empty array
// 2. loop through the rolls array
// 3. if the value is equal to or greater than the lowest value,
// 4. push the value into the new empty array
function filterOutLowValues(rolls, lowest) {
  let filteredValues = []

  for(roll of rolls){
    if(roll >= lowest){
      filteredValues.push(roll)
    }
  }
  return filteredValues
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */

// 1. 


function getRollCounts(rolls) {

  let newObject = {}; // declare a variable and assign it an empty {}, defining a default value
    for (i=0; i < rolls.length; i++) { // loop - to CHECK what is in the array
      // for (const roll of rolls)
      // if (roll in newObject)
      if (newObject[rolls[i]]) { // if the key is inside of the object,
        newObject[rolls[i]] += 1  // increament the key value by 1
      }  
        else {   // What can we write here? pesudocode-wise
        newObject[rolls[i]] = 1  // if it is not an empty array, its key value must start from 1
        console.log(newObject) 
      }
    }    
    return newObject //
  }

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
