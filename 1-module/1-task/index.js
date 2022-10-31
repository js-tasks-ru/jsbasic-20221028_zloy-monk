function factorial(n) {
  // ваш код...
  let result = n;
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    while (n > 1) {
      n--;
      result *= n;
    }
  }
  return result;
}
