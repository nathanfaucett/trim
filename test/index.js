var tape = require("tape"),
    trim = require("..");


tape("trim(str) should trim ends of string", function(assert) {
    assert.equal(trim(" \t\n hey \t\n "), "hey");
    assert.equal(trim(), "");
    assert.equal(trim(null), "");
    assert.end();
});

tape("trim.left(str) should trim left of string", function(assert) {
    assert.equal(trim.left(" \t\n hey \t\n "), "hey \t\n ");
    assert.equal(trim.left(), "");
    assert.equal(trim.left(null), "");
    assert.end();
});

tape("trim.right(str) should trim right of string", function(assert) {
    assert.equal(trim.right(" \t\n hey \t\n "), " \t\n hey");
    assert.equal(trim.right(), "");
    assert.equal(trim.right(null), "");
    assert.end();
});
