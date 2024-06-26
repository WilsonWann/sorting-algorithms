var uniqueSortedArray = require('./unique-array')

function quickSort(arr, left, right) {
  if (left < right) {
    var pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  var pivot = arr[right];
  var i = left - 1;
  for (var j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
}

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}


var arr = [1, 2, 5, 6, 10, 2, 2];
var sortedArray = quickSort(arr, 0, arr.length - 1);
var uniqueArray = uniqueSortedArray(sortedArray)
console.log(uniqueArray); 
