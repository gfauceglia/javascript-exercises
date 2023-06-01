const sumAll = function(initial, final) {
  if (!Number.isInteger(initial) || !Number.isInteger(final) || initial < 0 || final < 0) {
    return 'ERROR'
  } else if (initial > final) {
    let aux = initial;
    initial = final;
    final = aux;
  }
  let sum = 0;
  for (initial; initial <= final; initial++) {
    sum += initial;
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
