var assert = require("assert"),
    trim = require("../src/index");


describe("trim(str)", function() {
    it("should trim ends of string", function() {
        assert.equal(trim(" \n hey \t\n"), "hey");
    });
});

describe("trim.left(str)", function() {
    it("should trim left of string", function() {
        assert.equal(trim.left(" \n hey \t\n"), "hey \t\n");
    });
});

describe("trim.right(str)", function() {
    it("should trim right of string", function() {
        assert.equal(trim.right(" \n hey \t\n"), " \n hey");
    });
});
