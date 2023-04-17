const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.nextItem = null;
  }

  getUnderlyingList() {
    return this.head;

  }

  enqueue(value) {
    let newNodeItem = new ListNode(value)

    if (this.head===null) {
      this.head = newNodeItem;
      this.nextItem = newNodeItem;
    } else {
      this.nextItem.next = newNodeItem;
      this.nextItem = newNodeItem;
    }

    return newNodeItem;

  }

  dequeue() {
    let newNodeFirstItem;

    if (this.head !== null) {
      newNodeFirstItem = this.head.value;
      this.head = this.head.next;
    }

    return newNodeFirstItem;

  }
}

module.exports = {
  Queue
};
