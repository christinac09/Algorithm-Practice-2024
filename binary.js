function binaryToDecimal(binaryInput) {
    const binaryArray = Array.from(binaryInput)
    let decimalValue = 0
    length = binaryArray.length
    for (i=0;i<length;i++) {
        decimalValue += (binaryArray[i] * 2**(length-1))
        length-=1
    }
    return decimalValue
}

console.log(decimalValue)