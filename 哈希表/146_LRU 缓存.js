/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.arr = new Map()
  this.capacity = capacity
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.arr.has(key)) {
    return -1
  } else {
    let value = this.arr.get(key)
    this.arr.delete(key)
    this.arr.set(key, value)
    return value
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.arr.has(key)) {
    this.arr.delete(key)
  }
  this.arr.set(key, value)
  if (this.capacity < this.arr.size) {
    this.arr.delete([...this.arr.keys()][0])
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
