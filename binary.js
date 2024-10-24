function binaryToDecimal(binaryInput) {
    const binaryStr = binaryInput.toString()
    let decimalValue = 0
    length = binaryStr.length
    for (i=0;i<length;i++) {
        let currentPowerOfTwo = 2**(length-(i+1))  // bc base two starts with 2^0, i+1 starts at 1
        decimalValue += (parseInt(binaryStr[i]) * currentPowerOfTwo)
    }
    return decimalValue
}

console.log(binaryToDecimal("101"))