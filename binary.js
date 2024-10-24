function binaryToDecimal(binaryInput) {
  const binaryStr = String(binaryInput);
  let decimalValue = 0;
  length = binaryStr.length;
  for (i = 0; i < length; i++) {
    let currentPower = 2 ** (length - (i + 1)); // bc base two starts with 2^0, i+1 starts at 1
    decimalValue += Number(binaryStr[i]) * currentPower;
  }
  return decimalValue;
}

console.log(binaryToDecimal("101"));

function decimalToBinary(decimalInput) {
  runningDecimalValue = Number(decimalInput);
  let binaryValue = "";
  for (i = 7; i >= 0; i--) {
    currentPower = 2 ** i;
    quotient = Math.floor(decimalInput / currentPower);
    console.log(quotient);
    remainder = runningDecimalValue % currentPower;
    /* if (quotient != 0) {
        digit = "1"
    } else {
        digit= "0"
    } */
    if (remainder !== runningDecimalValue) {
      digit = "1";
    } else {
      digit = "0";
    }
    binaryValue += digit;
    runningDecimalValue = remainder;
  }
  return binaryValue;
}
console.log(decimalToBinary("5"));
