const removeFromArray = function() {
    let output = arguments[0]
    for (let i = 1; i <= arguments.length; i++){
        const index = output.indexOf(arguments[i])
        if (index > -1){
            output.splice(index, 1)
        }
    }
    return output;
    
};

// Do not edit below this line
module.exports = removeFromArray;
