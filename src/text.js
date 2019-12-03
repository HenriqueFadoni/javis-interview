// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

/* 
(V) class LinkedList<T>:
(V) pushBack(data: T): void; // inserts a new element at the back (end) of the list
(V) pushFront(data: T): void; // inserts a new element at the front (start) of the list
(V) exists(data: T): boolean; // checks if an element is part of the list
( ) get(data: T): (Node<T> | null); // returns a node containing data, or null of such doesn't exist
insertAfter(node: Node < T >, data: T) : void // inserts a new node containing data after the given node
insertBefore(node: Node < T >, data: T) : void // inserts a new node containing data before the given node
reverse(): void // reverses the linked list in-place
reversed(): List < T > // returns a new copy of the current list, copied in reverse. The current list is unmodified.
toArray(): T[]
*/

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

const addNodeToEnd = (data, list) => {
  let newNode = new Node(data);
  newNode.prev = list.tail;

  if (!list.head) {
    list.head = newNode
  } else {
    list.tail.next = newNode;
  }

  list.tail = newNode;
  newNode.next = null;
}

const addNodeToStart = (data, list) => {
  let newNode = new Node(data);
  newNode.next = list.head;

  if (!list.head) {
    list.tail = newNode;
  } else {
    list.head.prev = newNode;
  }

  list.head = newNode;
  newNode.prev = null;
}

const checkExists = (search, list) => {
  let element = list.head;
  let answer = null;

  while (answer === null) {
    if (element.data === search) {
      answer = true;
    } else if (element.next) {
      element = element.next;
    } else {
      answer = false;
    }
  }

  return answer
}

// funciton linkedListExample() {
//   const list = { head: null, tail: null };
//   const node1 = new Node('1');
//   list.head = node1;
//   list.tail = node1;

//   const node2 = new Node('2');
//   node1.next = node2;
//   node2.prev = node1;
//   list.tail = node2;

//   const addNode = (data) {
//     const newNode = new Node(data);
//     newNode.prev = list.tail;
//     newNode.next = null;
//     list.tail.next = newNode;
//     list.tail = newNode;
//   }

//   function toArray() {
//     return [node1.data, node2.data];
//   }

//   const list = new LinkedList();

//   list.pushBack(1);
//   const snapshot1 = list.toArray();
//   console.log(snapshot1); // [1]

//   list.pushFront(0);
//   const snapshot2 = list.toArray();
//   console.log(snapshot2); // [0, 1]

//   list.reverse();
//   const snapshot3 = list.toArray();
//   console.log(snapshot3); // [1, 0]
// }

// export class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
// }

// export class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }

// const addNodeToEnd = (data, list) => {
//   let newNode = new Node(data);
//   newNode.prev = list.tail;

//   if (!list.head) {
//     list.head = newNode;
//   }

//   newNode.next = null;
//   list.tail = newNode;
//   list.tail.next = newNode;
// }

// let newList = new LinkedList();
// console.log(newList)

// addNodeToEnd(12, newList);
// console.log(newList)

// addNodeToEnd(13, newList);
// console.log(newList)

// addNodeToEnd(14, newList);
// console.log(newList)