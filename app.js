// count nodes
// count depth
// find item
// loop
// calculate sum of number

class Node {
  constructor(left, right, data) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

let leftLeaf = new Node(null, null, 3);
let rightLeaf = new Node(null, null, 3);
let root = new Node(leftLeaf, rightLeaf, 1);

function treeCount(node) {
  if(node === null) {
    return 0;
  } else {
    return 1 + treeCount(node.left) + treeCount(node.right);
  }
}

function leaf(node, direction, count) {
  if(node[direction] === null) {
    return count;
  } else {
    return leaf(node[direction], direction, count + 1)
  }
}

function  treeWidth(node) {
  if(node.left === null && node.right === null) {
    return 1;
  }
  if(node === null) {
    return 0;
  } else {
    return leaf(node, 'left', 0) + leaf(node, 'right', 0)
  }
}


function atIndex(arr, item, pos = 0) {
  if (arr.length === 0 || 
      pos === arr.length - 1 && arr[pos] !== item) {
    return null;
  }
  if(arr[pos] === item) {
    return pos;
  } else {
    return atIndex(arr, item, ++pos);
  }
}

function sum(arr, pos = 0) {
  if(pos === arr.length -1) {
    return arr[pos];
  } else {
    return arr[pos] + sum(arr, ++pos)
  }
}



/*
calc total sum 999 = 9 * 9 * 9 = 729, 7 * 2 * 9 = 1 * 2 * 6 = 12 = 1* 2 = 2
*/

/* 66 = 6 * 6 = 3* 6 = 1 * 8 = 8 */

function operations(no, times = 1) {
  let chars = (no + '').split('');
  if(chars.length === 1) {
    return times;
  }
  return operations(parseInt(chars[0]) * parseInt(chars[1]), times + 1) 
}

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + factorial(num - 1);
  }
}

// 666 should be 6 * 100  + 6 * 10 + 6 * 1 

function toNumber(no) {
  let chars = no.split('');
  if(chars.length === 1) {
    return parseInt(chars[0]);
  } else {
    console.log(Math.pow(10,chars.length - 1) * parseInt(chars[0]));
    return Math.pow(10,chars.length - 1) * parseInt(chars[0]) + toNumber(no.substr(1))
  }
}

console.log('sum', sum([1,2,3]));

console.log('atIndex', atIndex([1,2,3], 3));

console.log('atIndex - not found', atIndex([1, 2, 3], 4));

console.log('calc leafs', treeCount(root));

console.log('calc width', treeWidth(root))

// 1 3,5 , 7
console.log('calc width2', treeWidth(new Node(
  new Node(new Node(null, null, 7), null, 3),
  new Node(null, new Node(null, null, 9), 5),
  1
)))

console.log('calc width3', treeWidth(new Node(null, null, 1)));

console.log('operations', operations(66))

console.log('toNumber', toNumber('666'));

console.log('factorial', factorial(5));