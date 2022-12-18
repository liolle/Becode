

/**
 * @pre year : number 
 * @post return true if year is a leap year
 */
export function isLeapYear (year:number) {
    // return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))? "Leap Year":"NOT a Leap Year";
    return (year%4 == 0 && year%100 != 0) || (year%4 == 0 && year%100 == 0 && year%400 == 0)? "Leap Year":"NOT a Leap Year";
}


/**
 * @pre : n the number of number to return | n >= 0
 * @post : A list of n random number between 0 and 10 000
 */

export function randomList(n:number):Array<number>{
    let res:Array<number> = [];
    let range = [0,10000];
    
    for (let index = 0; index < n; index++) {
        let random = Math.random() *(range[0],range[1]) + range[0];
        res.push(random);
    }
    
    return res;
}



/**
 * 
 * @pre : input: string input.length >= n, 
 * n :number the size of the substring to return ,
 * order: string in-order | reverse
 * @post : retrun a substing of size n with the n first character of input if order == in-order 
 * otherwise return the n last character.
 * order = in-order | reverse
 */

export function getSubString(input:string,n:number,order:string="in-order"):string{

    let sub_length = input.length  - n

    if (sub_length<0) return ""

    switch (order){
        case "in-order":
            return input.substring(0,n)
            
        case "reverse":
            return input.substring(sub_length)
            
        default:
            return ""
    }

}



/**
 * 
 * @pre n: number | n > 0
 * @post : pritnt the 10 first entry of n multiplication table 
 */

export function tableTen(n:number){
    for(let i =1;i<=10;i++){
        console.log(i*n)
    }
}

//Write a function which receives a number and return its mirror number. 

/**
 * 
 * @pre n : n >= 0
 * @post return the mirror number of n (example: 4209 → 9024)
 */

export function mirrorNumber(n:number):number{

    let cur = n
    let count = 0
    
    while (cur>0){
        count *= 10
        count += cur%10
        cur = Math.floor(cur/10)
    }
    return count
}


/**
 * 
 * @pre : array : Array:<string>
 * @post : returns true if it’s symmetrical, meaning if the first element is equal to the last, etc…​ 
 * return false otherwise
 */

export function symmetricalArray(array:Array<string>):boolean{

    for (let i = 0; i < array.length-i-1; i++) {
        if (array[i] != array[array.length-i-1]) return false
    }

    return true
}

//Write a function which receives an array of integers and return the position of its biggest number.

/**
 * 
 * @pre array : Array:<number>
 * @post return the position of the biggest number in the array return -1 if the array is empty.
 */

export function maxArray(array:Array<number>):number{

    let cur_index = -1
    
    for (let i = 0; i < array.length; i++) {
        if (cur_index == -1){
            cur_index = i
            continue
        }

        if (array[i]>array[cur_index]) cur_index = i
    }

    return cur_index 
}

//Write a function which receives either a number or a string and check if its a palindrome, 
//meaning if its identical no matter the reading direction. (example: 10201, civic)

/**
 * 
 * @pre input : number|string
 * @post return true if the input is a palindrome false otherwise
 */

export function isPalindrome(input:number|string):boolean{

    let target = (typeof input === "number"? input.toString : input )as string

    for (let i = 0; i < target.length-i-1; i++) {
        if (target[i].toLowerCase() !== target[target.length-i-1].toLowerCase()) return false
    }

    return true
}