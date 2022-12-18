// 1992	Leap Year
// 2000	Leap Year
// 1900	NOT a Leap Year


const doc = require('../dis/script')

test('leap year', () => {
    expect(doc.isLeapYear(1992)).toBe("Leap Year");
    expect(doc.isLeapYear(2000)).toBe("Leap Year");
    expect(doc.isLeapYear(1900)).toBe("NOT a Leap Year");
});

test('right and left', () => {

    // edge-case

    expect(doc.getSubString("just a simple test",0)).toBe("");
    expect(doc.getSubString("just a simple test",0,"reverse")).toBe("");

    expect(doc.getSubString("just a simple test",18)).toBe("just a simple test");
    expect(doc.getSubString("just a simple test",18,"reverse")).toBe("just a simple test");

    // normal case 

    expect(doc.getSubString("just a simple test",4)).toBe("just");
    expect(doc.getSubString("just a simple test",13)).toBe("just a simple");
    expect(doc.getSubString("just a simple test",4,"reverse")).toBe("test");
    expect(doc.getSubString("just a simple test",13,"reverse")).toBe("a simple test");
    
});

test('multiplication table',()=>{
    //intercept all console.log() and strore infomations in spy
    const spy = jest.spyOn(console, 'log');
    doc.tableTen(5);

    
    expect(spy).toHaveBeenCalledTimes(10);

    expect(spy).toHaveBeenCalledWith(5);
    expect(spy).toHaveBeenCalledWith(10);
    expect(spy).toHaveBeenCalledWith(15);
    expect(spy).toHaveBeenCalledWith(20);
    expect(spy).toHaveBeenCalledWith(25);
    expect(spy).toHaveBeenCalledWith(30);
    expect(spy).toHaveBeenCalledWith(35);
    expect(spy).toHaveBeenCalledWith(40);
    expect(spy).toHaveBeenCalledWith(45);
    expect(spy).toHaveBeenCalledWith(50);
    
})

test('mirror number',()=>{
    expect(doc.mirrorNumber(4209)).toBe(9024);
    expect(doc.mirrorNumber(10)).toBe(1);
    expect(doc.mirrorNumber(5)).toBe(5);
    expect(doc.mirrorNumber(5)).toBe(5);
    expect(doc.mirrorNumber(42090)).toBe(9024);

})

test('symetrical',()=>{
    expect(doc.symmetricalArray(["1","2","1","2"])).toBe(false)
    expect(doc.symmetricalArray(["1","2","5","1","2"])).toBe(false)
    expect(doc.symmetricalArray(["1","2","2","1"])).toBe(true)
    expect(doc.symmetricalArray(["1","2","5","2","1"])).toBe(true)
    expect(doc.symmetricalArray(["1"])).toBe(true)
    expect(doc.symmetricalArray([])).toBe(true)
})

test('maxArray',()=>{
    expect(doc.maxArray([1,2,6,7,8,9])).toBe(5)
    expect(doc.maxArray([1,2,6,12,7,8,9])).toBe(3)
    expect(doc.maxArray([])).toBe(-1)
    expect(doc.maxArray([1,1,1,1])).toBe(0)
})



test ('palindrome',()=>{
    expect(doc.isPalindrome("Reifier")).toBe(true)
    expect(doc.isPalindrome("Retâter")).toBe(true)
    expect(doc.isPalindrome("232")).toBe(true)
    expect(doc.isPalindrome("1")).toBe(true)
    expect(doc.isPalindrome("a")).toBe(true)
    expect(doc.isPalindrome("Radar")).toBe(true)
    expect(doc.isPalindrome("Radarx")).toBe(false)
    expect(doc.isPalindrome("ab")).toBe(false)
    expect(doc.isPalindrome("128")).toBe(false)
    
})

