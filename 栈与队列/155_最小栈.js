var MinStack = function() {
  this.stack = []
  this.aid = [Infinity]
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this.aid.push(Math.min(this.aid[this.aid.length-1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.aid.pop()
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.aid[this.aid.length-1]
};
