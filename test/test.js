var assert = require("assert"),
    trim = require("../src/index");


describe("trim(str)", function() {
    it("should trim ends of string", function() {
        assert.equal(trim(" \t\n hey \t\n "), "hey");
        assert.equal(trim(), "");
        assert.equal(trim(null), "");
    });
});

describe("trim.left(str)", function() {
    it("should trim left of string", function() {
        assert.equal(trim.left(" \t\n hey \t\n "), "hey \t\n ");
        assert.equal(trim.left(), "");
        assert.equal(trim.left(null), "");
    });
});

describe("trim.right(str)", function() {
    it("should trim right of string", function() {
        assert.equal(trim.right(" \t\n hey \t\n "), " \t\n hey");
        assert.equal(trim.right(), "");
        assert.equal(trim.right(null), "");
    });
});
