const fibonacci = function(len) {
    return Array.from(Array(len), (e,i)=>i+1).map((x, index, arr) => {
        if (index < 2) {
            return 1;
        } else {
            return arr[index - 2] + arr[index - 1];
        };
    });
};

// Do not edit below this line
module.exports = fibonacci;
