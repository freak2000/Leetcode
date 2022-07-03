class ListNode {
  val
  next = null
  constructor (val, next) {
    this.val = val
    this.next = next
  }
}

var MyLinkedList = function() {
  this._size = 0
  this._head = null
  this._tail = null
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this._size) {
    return -1
  }
  return this.getNode(index).val
};

MyLinkedList.prototype.getNode = function(index) {
  if (index < 0 || index >= this._size) {
    return -1
  }
  let cur = new ListNode(0, this._head)
  while(index >= 0) {
    cur = cur.next
    index--
  }
  return cur
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let node = new ListNode(val, this._head)
  this._head = node
  this._size++
  if (!this._tail) {
    this._tail = node
  }
  console.log(this._head)
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new ListNode(val, null)
  this._size++
  if (this._tail) {
    this._tail.next = node
    this._tail = node
    return
  }
  this._tail = node
  this._head = node
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index>this._size) return
  if (index<=0) {
    this.addAtHead(val)
  } else if(index === this._size) {
    this.addAtTail(val)
  } else if(index<this._size || index>0) {
    let flag = this.getNode(index-1)
    this._size++
    flag.next = new ListNode(val, flag.next)
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index<0 || index>=this._size) return
  if (index === 0) {
    this._size--
    this._head = this._head.next
    if (this._size === 0) {
      this._tail = null
    }
    return
  }
  let flag = this.getNode(index-1)
  flag.next = flag.next.next;
  // 处理尾节点
  if(index === this._size - 1) {
    this._tail = flag;
  }
  this._size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
