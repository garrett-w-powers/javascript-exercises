const palindromes = function (input) {
    const chars = Array.from(input.toLowerCase().replace(/[^0-9a-z]/gi, ''));
    console.log(chars);
    const revChars = Array.from(chars).reverse();
    console.log(revChars);
    return chars.every((character, index) => {
        console.log(character);
        console.log(revChars[index]);
        return character === revChars[index]});
};

// Do not edit below this line
module.exports = palindromes;
