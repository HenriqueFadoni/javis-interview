import React, { FunctionComponent, useState, useEffect } from 'react';

import { LinkedList, Node } from './text';

import DisplayNode from './components/DisplayNode';
import Functionalities from './components/Functionalities';
import SearchNode from './components/SearchNode';

const App: FunctionComponent = () => {
  const [searchResponse, setSearchResponse] = useState(false);
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

  return (
    <div>
      {
        list.head &&
        <DisplayNode list={list} />
      }
      <Functionalities
        onClickHandler={addNodeToEnd}
        text='Add Node To End'
      />
      <Functionalities
        onClickHandler={addNodeToStart}
        text='Add Node To Start'
      />
      <SearchNode
        response={searchResponse}
        searchItem={checkNodeExists}
      />
    </div>
  );
}

export default App;
