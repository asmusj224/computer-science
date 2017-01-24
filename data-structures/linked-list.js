// ************************************************
//  Constructors
// ************************************************
function LinkedList() {
  this.head = null;
  this.length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
// ************************************************
//  Prototype Methods
// ************************************************

LinkedList.prototype.add = function (value) {
  if (typeof value !== 'undefined') {
    var node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  } else {
    throw new Error('Must contain a value');
  }
}

LinkedList.prototype.remove = function (index) {
  if (index < 0 || index >= this.length) {
    throw new Error('Index must be greater than 0 and less than list length');
  }
  if (index === 0) {
    var temp = this.head;
    this.head = this.head.next;
    temp = null;
  } else {
    var current = this.head;
    var previous;
    while (index > 0) {
      previous = current;
      current = current.next;
      index--;
    }

    previous.next = current.next;
    current = null;
  }
}

LinkedList.prototype.getItem = function (index) {
  if (index < 0 || index >= this.length) {
    throw new Error('Index out of bounds');
  } else {
    var current = this.head;
    while (index > 0) {
      current = current.next;
      index--;
    }
    return current.value;
  }
}

LinkedList.prototype.toArray = function () {
  var current = this.head;
  var results = [];
  while (current !== null) {
    results.push(current.value);
    current = current.next;
  }
  return results;
}

LinkedList.prototype.toString = function () {
  return this.toArray().toString();
}
