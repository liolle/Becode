"use strict";
// Write a function which receives a year as parameter and returns true if the received value is a leap year.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubString = exports.randomList = exports.isLeapYear = void 0;
/**
 * @pre year : number
 * @post
 */
function isLeapYear(year) {
    // return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))? "Leap Year":"NOT a Leap Year";
    return (year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) ? "Leap Year" : "NOT a Leap Year";
}
exports.isLeapYear = isLeapYear;
/**
 * @pre : n the number of number to return | n >= 0
 * @post : A list of n random number between 0 and 10 000
 */
function randomList(n) {
    var res = [];
    var range = [0, 10000];
    for (var index = 0; index < n; index++) {
        var random = Math.random() * (range[0], range[1]) + range[0];
        res.push(random);
    }
    return res;
}
exports.randomList = randomList;
//
/*
Write two algorithm each receiving a sentence and a number n, one of them will return the n first word and the
second the n last word.*/
/**
 *
 * @pre : input: string input.length >= n,
 * n :number the size of the substring to return ,
 * order: string in-order | reverse
 * @post : retrun a substing of size n with the n first character of input if order == in-order
 * otherwise return the n last character.
 * order = in-order | reverse
 */
function getSubString(input, n, order) {
    if (order === void 0) { order = "in-order"; }
    var sub_length = input.length - n;
    if (sub_length < 0)
        return "";
    switch (order) {
        case "in-order":
            return input.substring(0, n);
        case "reverse":
            return input.substring(sub_length);
        default:
            return "";
    }
}
exports.getSubString = getSubString;

const fs =  require('fs/promises')
console.log("just a simple test".length)

async function exemple(){
  try{
    let data = await fs.readFile('stdin',{encoding:'utf8'})
    console.log(data)
  }
  catch(err){
    console.log(err)
  }
}
