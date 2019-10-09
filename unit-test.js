
const expect = require('expect');
const {toLowerCase} = require('./utils')

describe("LowerCase Validation",()=>{


    it("should allow string with non space characters",() =>{
        let str = "KRISTI";
        let testStr = toLowerCase(str);
        expect(testStr).toBe("kristi")
    });
});
