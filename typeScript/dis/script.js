"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = exports.maxArray = exports.symmetricalArray = exports.mirrorNumber = exports.tableTen = exports.getSubString = exports.randomList = exports.isLeapYear = void 0;
/**
 * @pre year : number
 * @post return true if year is a leap year
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
/**
 *
 * @pre n: number | n > 0
 * @post : pritnt the 10 first entry of n multiplication table
 */
function tableTen(n) {
    for (var i = 1; i <= 10; i++) {
        console.log(i * n);
    }
}
exports.tableTen = tableTen;
//Write a function which receives a number and return its mirror number. 
/**
 *
 * @pre n : n >= 0
 * @post return the mirror number of n (example: 4209 → 9024)
 */
function mirrorNumber(n) {
    var cur = n;
    var count = 0;
    while (cur > 0) {
        count *= 10;
        count += cur % 10;
        cur = Math.floor(cur / 10);
    }
    return count;
}
exports.mirrorNumber = mirrorNumber;
/**
 *
 * @pre : array : Array:<string>
 * @post : returns true if it’s symmetrical, meaning if the first element is equal to the last, etc…​
 * return false otherwise
 */
function symmetricalArray(array) {
    for (var i = 0; i < array.length - i - 1; i++) {
        if (array[i] != array[array.length - i - 1])
            return false;
    }
    return true;
}
exports.symmetricalArray = symmetricalArray;
//Write a function which receives an array of integers and return the position of its biggest number.
/**
 *
 * @pre array : Array:<number>
 * @post return the position of the biggest number in the array return -1 if the array is empty.
 */
function maxArray(array) {
    var cur_index = -1;
    for (var i = 0; i < array.length; i++) {
        if (cur_index == -1) {
            cur_index = i;
            continue;
        }
        if (array[i] > array[cur_index])
            cur_index = i;
    }
    return cur_index;
}
exports.maxArray = maxArray;
//Write a function which receives either a number or a string and check if its a palindrome, 
//meaning if its identical no matter the reading direction. (example: 10201, civic)
/**
 *
 * @pre input : number|string
 * @post return true if the input is a palindrome false otherwise
 */
function isPalindrome(input) {
    var target = (typeof input === "number" ? input.toString : input);
    for (var i = 0; i < target.length - i - 1; i++) {
        if (target[i].toLowerCase() !== target[target.length - i - 1].toLowerCase())
            return false;
    }
    return true;
}
exports.isPalindrome = isPalindrome;
