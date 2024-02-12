const leapYears = function(year) {
    const check1 = (yr) => {
        if (yr % 4 == 0) return true
        else return false;
    };
    const check2 = (yr) => {
        if((yr % 100 == 0 && yr % 400 == 0)) {
            return true;
        }
        else return false;
    };
    console.log(check1(year));
    console.log(check2(year));

    if (check1(year)) {
        if (year % 100 == 0) {
            return check2(year)
        }
        else return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
