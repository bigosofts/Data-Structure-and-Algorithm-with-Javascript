//Last In, First  Out

//Array imp0lementation
var a = [1, 2, 3, 4, 5, 6, 7, 8];

a.push(9);
a.pop();

//Linked List imnplementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return undefined;
    var temp = this.first;
    this.first = temp.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return temp.value;
  }
  
}

var list = new Stack();

list.push(1);
list.push(2);

console.log(list.pop());
