function factorial(n) {
  //guard clause
  if (n < 1) {
    return "Less than 0";
  }
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}
console.log(factorial(5));

function newFactorial(n) {
  if (n > 0) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    return product;
  } else {
    return;
  }
}
