var isNative = require("is_native"),
    isString = require("is_string");


var nativeTrim = String.prototype.trim,
    reTrim = /^[\s\xA0]+|[\s\xA0]+$/g,
    baseTrim;


if (isNative(nativeTrim)) {
    baseTrim = function baseTrim(str) {
        return nativeTrim.call(str);
    };
} else {
    baseTrim = function baseTrim(str) {
        return str.replace(reTrim, "");
    };
}


module.exports = function trim(str) {
    return baseTrim(isString(str) ? str : String(str));
};
