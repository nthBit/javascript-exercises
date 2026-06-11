const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const maths = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return maths;
};

const multiply = function(array) {
  const maths = array.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
  return maths;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  const array = [];
  for (num; num > 0; num--) {
    array.push(num);
  }
  const maths = array.reduce((acc, n) => {
    return acc * n;
  }, 1);
  return maths;
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
