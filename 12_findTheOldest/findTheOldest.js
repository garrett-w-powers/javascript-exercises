const findTheOldest = function(arr) {
    const ages = arr.map((person) => {
        if (!person.yearOfDeath) {
            const age = (new Date()).getFullYear() - person.yearOfBirth;
            return {...person, age};
        } else {
            const age = person.yearOfDeath - person.yearOfBirth
            return {...person, age};
        }
    });
    return ages.sort((a, b) => a.age > b.age ? -1 : 1)[0];

};

// Do not edit below this line
module.exports = findTheOldest;
