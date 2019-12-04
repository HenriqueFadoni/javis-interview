export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
