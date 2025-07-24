

const calculator = (op, numOne, numTwo) => {
  if (op === "zbir") {
    return numOne + numTwo;
  } else if (op === "razlika") {
    return numOne - numTwo;
  } else if (op === "mnozenje") {
    return numOne * numTwo;
  } else if (op === "delenje") {
    if (numTwo === 0) {
      return "Greska: Ne moze da se deli so nula!";
    }
    return numOne / numTwo;
  } else if (op === "modulo") {
    if (numTwo === 0) {
      return "Greska: Ne moze da se presmeta modulo so nula!";
    }
    return numOne % numTwo;
  } else if (op === "stepen") {
    return Math.pow(numOne, numTwo);
  } else {
    return "Nepoznata operacija. Obidete se so: zbir, razlika, mnozenje, delenje, modulo, stepen.";
  }
};

module.exports = {
  calculator,
};