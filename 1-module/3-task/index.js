function ucFirst(str) {
  // ваш код...
  let newStr;
  if (str !== null && str.length > 0) {
    newStr = str[0].toUpperCase() + str.slice(1);
  } else {
    newStr = str;
  }
  return newStr;
}
