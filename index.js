exports.bin = function(input) {
    return input.toString(2);
};

exports.hex = function(input) {
    return input.toString(16);
};

exports.test = function(name) {
    console.log(name);
};
