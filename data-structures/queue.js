// ************************************************
//  Constructors
// ************************************************
function Queue() {
  this.first = null;
  this.size = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// ************************************************
//  Prototype Methods
// ************************************************
Queue.prototype.enqueue = function (value) {
  if (typeof value !== 'undefined') {
    var node = new Node(value);
    if (this.first === null) {
      this.first = node;
    } else {
      var current = this.first;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
    return node;
  } else {
    throw new Error('Must contain value');
  }
}

Queue.prototype.dequeue = function () {
  if (this.first !== null) {
    var temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  } else {
    return null;
  }
}

Queue.prototype.toArray = function () {
  var results = [];
  while (this.size > 0) {
    results.push(this.dequeue().value);
  }
  return results;
}

Queue.prototype.toString = function () {
  return this.toArray().toString();
}
