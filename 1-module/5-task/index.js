function truncate(str, maxlength) {
  // ваш код...
  let newStr = str;
  if (str !== null && str.length > maxlength) {
    newStr = str.slice(0, maxlength - 1) + '…';
  };
  return newStr;
}
