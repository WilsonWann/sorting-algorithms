function uniqueSortedArray(arr) {

  var uniqueArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

module.exports = uniqueSortedArray