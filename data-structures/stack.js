// ************************************************
//  Constructors
// ************************************************
function Stack() {
  this.top = null;
  this.size = 0;
}

function Node(value) {
  this.value = value;
  this.previous = null;
}

// ************************************************
//  Prototype Methods
// ************************************************

Stack.prototype.push = function (value) {
  if (typeof value !== 'undefined') {
    var node = new Node(value);
    node.previous = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }
}

Stack.prototype.pop = function () {
  var temp = this.top;
  this.top = this.top.previous;
  this.size--;
  return temp;
}

Stack.prototype.toArray = function () {
  var results = [];
  while (this.size > 0) {
    results.push(this.pop().value);
  }
  return results;
}

Stack.prototype.toString = function () {
  return this.toArray().toString();
}

Stack.prototype.isEmpty = function () {
  return this.size === 0;
}
