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