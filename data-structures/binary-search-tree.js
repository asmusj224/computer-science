// ************************************************
//  Constructors
// ************************************************

function BinaryTree() {
  this.root = null;
}

function Node(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

// ************************************************
//  Prototype Methods
// ************************************************

BinaryTree.prototype.add = function (value) {
  // fix this check
  if (typeof value !== 'undefined') {
    var node = new Node(value);
    // if tree is empty set the root to new node
    if (this.root === null) {
      this.root = node;
    } else {
      var current = this.root;
      while (true) {
        if (node.value <= current.value) {
          // insert in left child
          if (current.leftChild === null) {
            current.leftChild = node;
            break;
          } else {
            current = current.leftChild;
          }
        } else {
          if (current.rightChild === null) {
            current.rightChild = node;
            break;
          } else {
            current = current.rightChild;
          }
        }
      }
    }
  } else {
    throw new Error('Must contain a value');
  }
}

BinaryTree.prototype.remove = function (value) {
  remove.call(this, this.root, value);
}

BinaryTree.prototype.traverse = function (traversalMethod, process) {
  if (traversalMethod !== null) {
    traversalMethod.call(this, this.root, process);
  } else {
    inOrder.call(this, this.root, process);
  }
}

// traverse the list
BinaryTree.prototype.size = function () {
  var count = 0;

  this.traverse(null, function () {
    count++;
  });

  return count;
}

BinaryTree.prototype.toArray = function () {
  var results = [];
  this.traverse(inOrder, function (node) {
    results.push(node);
  });
  return results;
}

BinaryTree.prototype.contains = function (value) {
  var current = this.root;
  var found = false;
  while (current !== null && !found) {
    if (current.value < value) {
      current = current.leftChild;
    }

    else if (current.value > value) {
      current = current.rightChild;
    }
    else {
      found = true;
    }
  }
  return found;
}

BinaryTree.prototype.toString = function () {
  return this.toArray().toString();
}
// ************************************************
//  Helper functions
// ************************************************

// left root right
function inOrder(root, process) {
  if (root.leftChild !== null) {
    inOrder(root.leftChild, process);
  }

  process.call(this, root.value);

  if (root.rightChild !== null) {
    inOrder(root.rightChild, process);
  }
}
// root left right
function preOrder(root, process) {
  if (root !== null) {
    process.call(this, root.value);
  } else {
    return;
  }
  preOrder(root.leftChild, process);
  preOrder(root.rightChild, process);
}

// left right root
function postOrder(root, process) {
  if (root.leftChild !== null) {
    postOrder(root.leftChild, process);
  }
  if (root.rightChild !== null) {
    postOrder(root.rightChild, process);
  }
  if (root !== null) {
    process.call(this, root.value);
  } else {
    return;
  }
}

function getSize(root) {
  if (root === null) {
    return 0;
  } else {
    // count your size
    var count = 1;
    if (root.rightChild !== null) {
      count += getSize(root.rightChild);
    }
    if (root.leftChild !== null) {
      count += getSize(root.leftChild);
    }

    return count;
  }


}

function remove(root, data) {
  if (root === null) {
    return null;
  } else if (data < root.value) {
    root.leftChild = remove(root.leftChild, data);
  } else if (data > root.data) {
    root.rightChild = remove(root.rightChild, data);
  } else {
    // case 1: no child
    // delete the root
    if (root.leftChild === null && root.rightChild === null) {
      delete root;
      root = null;
    }
    // case 2: one child
    // set temp variable
    // set root to either rightChild
    // delete temp
    else if (root.leftChild === null) {
      var temp = root;
      root = root.rightChild;
      delete temp;
    }
    // set temp variable
    // set root to either leftChild
    // delete temp
    else if (root.rightChild === null) {
      var temp = root;
      root = root.leftChild;
      delete temp;
      temp = null;
    }
    // case 3: 2 children
    // find maxium in left subtree
    // copy that value into root
    // remove value from left subtree
    else {
      // find maxium in left subtree
      var temp = findMax(root.leftChild);
      root.value = temp;
      root.leftChild = remove(root.leftChild, temp);
    }
  }
  return root;
}

function findMax(root) {
  if (root === null) {
    return -1;
  }

  var data = root.value;
  var leftTree = findMax(root.leftChild);
  var rightTree = findMax(root.rightChild);
  if (leftTree > data) {
    data = leftTree;
  }

  if (rightTree > data) {
    data = rightTree;
  }

  return data;
}

var t = new BinaryTree();
t.add(1);
console.log(t.contains(1));
