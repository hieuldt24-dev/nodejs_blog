const solveLinearEquation = async (a, b) => {

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input");
  }

  if (a === 0 && b === 0) {
    return "Infinite solutions";
  }

  if (a === 0 && b !== 0) {
    return "No solution";
  }

  const x = -b / a;
  return [x.toFixed(2)];
};

module.exports = solveLinearEquation;
