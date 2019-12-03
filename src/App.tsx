import React, { FunctionComponent, useState } from 'react';

import { LinkedList, Node } from './text';

import DisplayNode from './components/DisplayNode';
import Functionalities from './components/Functionalities';
import SearchNode from './components/SearchNode';
import GetNode from './components/GetNode';

const App: FunctionComponent = () => {
  const [list, setList] = useState(new LinkedList());
  const [searchResponse, setSearchResponse] = useState(false);
  const [showNode, setShowNode] = useState();

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
      <SearchNode
        response={searchResponse}
        searchItem={checkNodeExists}
      />
      <GetNode 
        getNode={getNode}
        showNode={showNode}
      />
    </div>
  );
}

export default App;
