import React, { FunctionComponent, useState, useEffect } from 'react';

import { LinkedList, Node } from './text';

import DisplayNode from './components/DisplayNode';
import Functionalities from './components/Functionalities';

const App: FunctionComponent = () => {
  const [list, setList] = useState(new LinkedList());

  const addNodeToEnd = (data: any) => {
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

  return (
    <div>
      {
        list.head &&
        <DisplayNode list={list} />
      }
      <Functionalities
        onClickHandler={addNodeToEnd}
        text='Add Node To Start'
      />
    </div>
  );
}

export default App;
