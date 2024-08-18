//First In, First Out

//Implementation in Array
var queue = [];

queue.push("1");
queue.push("2");
queue.push("3");
queue.push("4");

console.log(queue.shift());

//Class Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) return undefined;
    var currentHead = this.first;
    this.first = currentHead.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return currentHead.value;
  }
}

var queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
