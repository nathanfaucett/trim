var isNative = require("is_native"),
    toString = require("to_string");


var StringPrototype = String.prototype,

    reTrim = /^[\s\xA0]+|[\s\xA0]+$/g,
    reTrimLeft = /^[\s\xA0]+/g,
    reTrimRight = /[\s\xA0]+$/g,

    baseTrim, baseTrimLeft, baseTrimRight;


module.exports = trim;


if (isNative(StringPrototype.trim)) {
    baseTrim = function baseTrim(str) {
        return str.trim();
    };
} else {
    baseTrim = function baseTrim(str) {
        return str.replace(reTrim, "");
    };
}

if (isNative(StringPrototype.trimLeft)) {
    baseTrimLeft = function baseTrimLeft(str) {
        return str.trimLeft();
    };
} else {
    baseTrimLeft = function baseTrimLeft(str) {
        return str.replace(reTrimLeft, "");
    };
}

if (isNative(StringPrototype.trimRight)) {
    baseTrimRight = function baseTrimRight(str) {
        return str.trimRight();
    };
} else {
    baseTrimRight = function baseTrimRight(str) {
        return str.replace(reTrimRight, "");
    };
}


function trim(str) {
    return baseTrim(toString(str));
}

trim.left = function trimLeft(str) {
    return baseTrimLeft(toString(str));
};

trim.right = function trimRight(str) {
    return baseTrimRight(toString(str));
};
