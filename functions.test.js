const exp = require('constants');
const {capitalize,reverseString, Calculator, caesarCipher, analyzeArray} = require('./functions');
test("First letter is capital", ()=>{
    expect(capitalize("lover")).toMatch("Lover");
})

test("The string is reversed",()=>{
    expect(reverseString("hello")).toMatch("olleh");
})

test("2 + 2 = 4", ()=> {
    const calculator = new Calculator();
    expect(calculator.add(2,2)).toBe(4);
})
test("3 - 1 = 2", ()=> {
    const calculator = new Calculator();
    expect(calculator.subtract(3,1)).toBe(2);
})

test("3 * 1 = 3", ()=> {
    const calculator = new Calculator();
    expect(calculator.multiply(3,1)).toBe(3);
})
test("3 / 2 = 1.5", ()=> {
    const calculator = new Calculator();
    expect(calculator.divide(3,2)).toBeCloseTo(1.5);
})
test("Shifted 3 letters and punctuations/spaces are kept in tact", () => {
    expect(caesarCipher("abcd EFghi'", 3)).toMatch("defg HIjkl'");
})
test("Shifted 3 letters and punctuations/spaces are kept in tact", () => {
    expect(caesarCipher("abcd EFghi'", -3)).toMatch("xyza BCdef'");
})
test("Shifted 3 letters and punctuations/spaces are kept in tact", () => {
    expect(caesarCipher("xyza BCdef'", 3)).toMatch("abcd EFghi'");
})
test("Given an array of [1,8,3,4,2,6] return average: 4, min: 1, max: 8, length: 6 ", ()=> {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
})