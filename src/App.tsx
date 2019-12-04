import React, { FunctionComponent, useState } from 'react';

import { LinkedList, Node } from './text';

import DisplayNode from './components/DisplayNode';
import Functionalities from './components/Functionalities';
import SearchNode from './components/SearchNode';
import GetNode from './components/GetNode';
import InsertBetween from './components/InsertBetween';

const App: FunctionComponent = () => {
  const [list, setList] = useState(new LinkedList());
  const [searchResponse, setSearchResponse] = useState(false);
  const [showNode, setShowNode] = useState();
  const [reverseCopy, setReverseCopy] = useState(new LinkedList());

  const addNodeToEnd = (data: string) => {
    let newList = { ...list };
    let newNode = new Node(data);

    newNode.prev = newList.tail;

    if (!newList.head) {
      newList.head = newNode
    } else {
      newList.tail.next = newNode;
    }

    newNode.next = null;
    newList.tail = newNode;

    setList(newList);
  }

  const addNodeToStart = (data: string) => {
    let newList = { ...list };
    let newNode = new Node(data);
    newNode.next = newList.head;

    if (!newList.head) {
      newList.tail = newNode;
    } else {
      newList.head.prev = newNode;
    }

    newNode.prev = null;
    newList.head = newNode;

    setList(newList)
  }

  const checkNodeExists = (search: string) => {
    let element = { ...list.head };
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

    setSearchResponse(answer);
  }

  const getNode = (search: string) => {
    let listHead = { ...list.head };
    let answer = null;

    while (!answer) {
      if (listHead.data === search) {
        answer = listHead;
      } else if (listHead.next) {
        listHead = listHead.next;
      } else {
        answer = {
          data: 'Node doesn\'t exist!'
        };
      }
    }

    setShowNode(answer);
  }

  const insertAfter = (node: string, data: string) => {
    const newNode = new Node(node);
    let element = { ...list.head };
    let isDone = null;

    while (!isDone) {
      if (element.data === data && element.next !== null && element.prev !== null) {
        newNode.next = element.next
        newNode.prev = element.next.prev

        element.next.prev = newNode;
        element.next = newNode;

        while (element.prev) {
          element = element.prev
        }

        setList({
          ...list,
          head: element
        });
        isDone = true
      } else if (element.next) {
        element = element.next;
      } else {
        isDone = true;
      }
    }
  }

  const insertBefore = (node: string, data: string) => {
    const newNode = new Node(node);
    let element = { ...list.head };
    let isDone = null;

    while (!isDone) {
      if (element.data === data && element.next !== null && element.prev !== null) {
        newNode.prev = element.prev
        newNode.next = element

        element.prev.next = newNode;
        element.prev = newNode

        while (element.prev) {
          element = element.prev
        }

        setList({
          ...list,
          head: element
        });
        isDone = true
      } else if (element.next) {
        element = element.next;
      } else {
        isDone = true;
      }
    }
  }

  const reverseList = () => {
    let newList = new LinkedList();
    let element = { ...list.tail }
    let stop = false

    while (!stop) {
      const node = new Node(element.data);

      node.prev = newList.tail;

      if (!newList.head) {
        newList.head = node
      } else {
        newList.tail.next = node;
      }

      node.next = null;
      newList.tail = node;

      if (element.prev !== null) {
        element = { ...element.prev }
      } else {
        stop = true
      }
    }

    setList({ ...list, ...newList })
  }

  const reverseCopyList = () => {
    let newList = new LinkedList();
    let element = { ...list.tail }
    let stop = false

    while (!stop) {
      const node = new Node(element.data);

      node.prev = newList.tail;

      if (!newList.head) {
        newList.head = node
      } else {
        newList.tail.next = node;
      }

      node.next = null;
      newList.tail = node;

      if (element.prev !== null) {
        element = { ...element.prev }
      } else {
        stop = true
      }
    }

    setReverseCopy({ ...reverseCopy, ...newList });
  }

  const toArray = () => {
    let listHead = { ...list.head };
    let isDone = false;
    const array = [];

    while (!isDone) {
      array.push(listHead);

      if (listHead.next) {
        listHead = { ...listHead.next };
      } else {
        isDone = true
      }
    }

    console.log(array)
  }

  return (
    <div>
      {
        list.head &&
        <DisplayNode list={list} />
      }
      <Functionalities
        functionality={addNodeToEnd}
        text='Add Node To End'
      />
      <Functionalities
        functionality={addNodeToStart}
        text='Add Node To Start'
      />
      <InsertBetween
        insertNode={insertAfter}
        text='Insert After'
      />
      <InsertBetween
        insertNode={insertBefore}
        text='Insert Before'
      />
      <SearchNode
        response={searchResponse}
        searchItem={checkNodeExists}
      />
      <GetNode
        getNode={getNode}
        showNode={showNode}
      />
      <button onClick={reverseList}>Reverse</button>
      {
        reverseCopy.head &&
        <DisplayNode list={reverseCopy} />
      }
      <button onClick={reverseCopyList}>Reverse Copy</button>
      <button onClick={toArray}>Transform in Array</button>
    </div>
  );
}

export default App;
