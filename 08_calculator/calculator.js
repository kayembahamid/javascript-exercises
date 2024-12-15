const add = function(a, b) {
	let num1 = a;
  let num2 = b;
   return num1 + num2;
};

const subtract = function(a, b) {
	let num1 = a;
  let num2 = b;
    return num1 - num2;
};

const sum = function(numbers) {
  let total = 0;
  for (let n = 0; n < numbers.length; n++){
      total += numbers[n];
  }

  return total;
};

const multiply = function(numbers) {
  let product = 1;
  for (let n = 0; n < numbers.length; n++){
    product *= numbers[n];
  }
  return product;
};

const power = function(base, exponent) {
	let power = 1;
  for (let n = 0; n < exponent; n++){
    power *= base;
  }
  return power;
};

const factorial = function(num) {
  if (num === 0 ) return 1;
  let factorial = 1;
  for (let n = 1; n <= num; n++){
    factorial *= n;
  }
	return factorial;
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
