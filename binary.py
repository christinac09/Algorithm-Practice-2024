# binary to decimal
def bitodec(binary_inp):
    binary_str = str(binary_inp)
    decimal_value = 0
    length = len(binary_str)
    for i in range(length):
        decimal_value += (int(binary_str[i])* 2**(length-1))
        length-=1
    return decimal_value

#print(bitodec("111"))

