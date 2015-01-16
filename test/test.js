var assert = require("assert"),
    trim = require("../src/index");


describe("trim(str)", function() {
    it("should trim ends of string", function() {
        assert.equal(trim(" \n hey \t\n"), "hey");
    });
});
