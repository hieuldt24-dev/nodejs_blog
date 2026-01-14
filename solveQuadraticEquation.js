const solveLinearEquation = require('./solveLinearEquation');

const solveQuadraticEquation = async (a, b, c) => {

  if (a === 0) {
    return await solveLinearEquation(b, c);
  }

  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return "No real solutions";
  }

  if (delta === 0) {
    const x = -b / (2 * a);
    return [x.toFixed(2)];
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [x1.toFixed(2), x2.toFixed(2)];
};

module.exports = solveQuadraticEquation;
