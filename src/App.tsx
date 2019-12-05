import React, { FunctionComponent, useState } from 'react';

import { LinkedList, Node } from './contructors';

import DisplayNode from './components/DisplayNode';
import Functionalities from './components/Functionalities';
import SearchNode from './components/SearchNode';
import GetNode from './components/GetNode';
import InsertBetween from './components/InsertBetween';
import ToArray from './components/ToArray';
import ReverseCopyList from './components/ReverseCopyList';
import Button from './components/Button';

const App: FunctionComponent = () => {
  const [list, setList] = useState(new LinkedList());

  const addNodeToEnd = (data: string) => {
    let newList = { ...list };
    let newNode = new Node(data);

    newNode.prev = newList.tail;

    if (!newList.head) {
      newList.head = newNode
    } else {
      newList.tail.next = newNode;
    }

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

    newList.head = newNode;
    setList(newList)
  }

  const insertAfter = (node: string, data: string) => {
    const newNode = new Node(node);
    let element = { ...list.head };
    let isDone = null;

    const isInMiddle = element.data === data && element.next !== null && element.prev !== null;

    while (!isDone) {
      if (isInMiddle) {
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

    const isInMiddle = element.data === data && element.next !== null && element.prev !== null;

    while (!isDone) {
      if (isInMiddle) {
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

    setList({ 
      ...list, 
      ...newList 
    });
  }

  return (
    <div>
      {list.head && <DisplayNode list={list} />}
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
      <SearchNode list={list} />
      <GetNode list={list} />
      <Button 
        text='Reverse'
        onClickHandler={reverseList}
      />
      <ReverseCopyList list={list} />
      <ToArray list={list} />
    </div>
  );
}

export default App;
