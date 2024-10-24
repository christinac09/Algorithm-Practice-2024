binary to decimal:

```
1. Input binary string
2. let decimalvalue = 0
3. let length = length of binary string
4. for i = 0 to i < length:
    let currentpowerof2 = 2^(length+(i+1))
    decimalvalue + (binarystring[i] * currentpowerof2)
5. return decimalvalue
```

decimal to binary:

```
1. input decimal string
2. let binary value = 0
2. for i = 7 to i = 0:
    decimal string - 2^i
    add quotient to binary value, continue loop with remainder

```
