const sumAll = function(num1, num2) {
    if ((typeof num1 !== 'number' | typeof num2 !== 'number')){
        return 'ERROR';
    }
    else if ((num1 < 0 | num2 < 0)){
        return 'ERROR';
    }
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    const length = end - start + 1;
    let toAdd = Array(length).fill().map((element, index) => index + start)
    console.log(toAdd)
    const sum = toAdd.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
