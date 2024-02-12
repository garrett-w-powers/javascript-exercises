const reverseString = function(str) {
    const letters = str.split('');
    const reversed = letters.reverse();
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
