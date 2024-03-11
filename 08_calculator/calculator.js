const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr = []) {
	const total = arr.reduce((acc, x) => acc + x, 0);
  return total;
};

const multiply = function(arr = []) {
  const total = arr.reduce((acc, x) => acc * x, 1);
  return total;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(len) {
	return Array.from(Array(len), (e,i)=>i+1).reduce((acc, x) => acc * x, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
