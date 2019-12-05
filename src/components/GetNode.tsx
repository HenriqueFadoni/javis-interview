import React, { FunctionComponent, useState } from 'react';

import Functionalities from './Functionalities';
import { LinkedListType } from '../types';

const GetNode: FunctionComponent<LinkedListType> = ({ list }) => {
  const [showNode, setShowNode] = useState();
  let displayNode

  const getNode = (search: string) => {
    let listHead = { ...list.head };
    let node = null;

    while (!node) {
      if (listHead.data === search) {
        node = listHead;
      } else if (listHead.next) {
        listHead = listHead.next;
      } else {
        node = {
          data: 'Node doesn\'t exist!'
        };
      }
    }

    setShowNode(node);
  }

  if (showNode) {
    displayNode = (
      <div>
        <h3>Data: {showNode.data}</h3>
        <h3>Next: {showNode.next ? showNode.next.data : 'null'}</h3>
        <h3>Prev: {showNode.prev ? showNode.prev.data : 'null'}</h3>
      </div>
    );
  }

  return (
    <>
      {displayNode && displayNode}
      <Functionalities
        functionality={getNode}
        text='Get Node'
      />
    </>
  );
}

export default GetNode;
