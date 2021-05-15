const { test, expect } = require("@jest/globals");
const divide = require('../divide.js');

test("To throw error when zero division", () => {
    expect( divide.bind(null, 2, 0) ).toThrow();
    expect( divide.bind(null, 2, 0) ).toThrow(Error);
    expect( divide.bind(null, 2, 0) ).toThrow("divide by 0 error");
});

test("Not to throw error when not zero division", () => {
    expect(function(){
        divide(2 / 1);
    }).not.toThrow();
});

