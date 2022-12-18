

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