// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// (V) class LinkedList<T>:
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

// (V) pushBack(data: T): void; // inserts a new element at the back (end) of the list
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

// (V) pushFront(data: T): void; // inserts a new element at the front (start) of the list
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

// (V) exists(data: T): boolean; // checks if an element is part of the list
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

// (V) get(data: T): (Node<T> | null); --- returns a node containing data, or null of such doesn't exist
const getNode = (search, list) => {
  let element = list.head;
  let answer = null;

  while (!answer) {
    if (element.data === search) {
      answer = element;
    } else if (element.next) {
      element = element.next;
    } else {
      answer = 'Doesn\'t exist';
    }
  }

  return answer
}

// (V) insertAfter(node: Node < T >, data: T) : void // inserts a new node containing data after the given node
const insertAfter = (node, data, list) => {
  let element = list.head;
  let searchNode = null;

  while (!searchNode) {
    if (element.data === data) {
      searchNode = element;
    } else if (element.next) {
      element = element.next;
    } else {
      searchNode = false;
    }
  }

  if (searchNode) {
    const newNode = node
    newNode.next = searchNode.next
    newNode.prev = searchNode.next.prev

    searchNode.next.prev = newNode
    searchNode.next = newNode
  } else {
    return 'Doesnt exist'
  }
}

/*
(V) insertBefore(node: Node < T >, data: T) : void // inserts a new node containing data before the given node
(V) reverse(): void // reverses the linked list in-place
( ) reversed(): List < T > // returns a new copy of the current list, copied in reverse. The current list is unmodified.
( ) toArray(): T[]
*/

let newList = new LinkedList();
// console.log(newList)

addNodeToEnd(12, newList);
// console.log(newList)

addNodeToEnd(13, newList);
// console.log(newList)

addNodeToEnd(14, newList);
// console.log(newList)

// const node = getNode(14, newList);
// console.log(node)

const node = new Node(3);
insertAfter(node, 12, newList);
console.log(newList)
