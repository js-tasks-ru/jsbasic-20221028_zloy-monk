function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let numberArr = arr.filter(item => +item)
  let min = Math.min(...numberArr);
  let max = Math.max(...numberArr);
  let minMax = {
    min,
    max,
  };
  return minMax;
}
