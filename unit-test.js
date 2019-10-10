
const expect = require('expect');
const {toLowerCase, sum} = require('./utils')

describe("LowerCase Validation",()=>{


    it("should allow string with non space characters",() =>{
        let str = "KRISTI";
        let testStr = toLowerCase(str);
        expect(testStr).toBe("kristi")
    });

    it("add two numbders",() =>{
        let a = 5;
        let b = 3;
        let sum1 = sum(a, b);
        expect(sum1).toBe(8)
    });
});
