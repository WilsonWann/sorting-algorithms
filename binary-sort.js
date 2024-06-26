class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insertNode(root, value) {
  if (root === null) {
    return new TreeNode(value);
  }

  if (value < root.value) {
    root.left = insertNode(root.left, value);
  } else {
    root.right = insertNode(root.right, value);
  }

  return root;
}

function inOrderTraversal(root, result) {
  if (root !== null) {
    inOrderTraversal(root.left, result);
    result.push(root.value);
    inOrderTraversal(root.right, result);
  }
}

function binaryTreeSort(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let root = null;
  for (let i = 0; i < arr.length; i++) {
    root = insertNode(root, arr[i]);
  }

  const sortedArray = [];
  inOrderTraversal(root, sortedArray);

  return sortedArray;
}

const array = [34, 7, 23, 32, 5, 62];
const sortedArray = binaryTreeSort(array);
console.log(sortedArray); 
