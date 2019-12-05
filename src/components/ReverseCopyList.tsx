import React, { FunctionComponent, useState } from 'react';

import { LinkedList, Node } from '../contructors';
import DisplayNode from '../components/DisplayNode';

interface Nodex {
  data: string,
  next: Nodex,
  prev: Nodex
}

interface ReverseCopyListProps {
  list: {
    head: Nodex,
    tail: Nodex
  }
}

const ReverseCopyList: FunctionComponent<ReverseCopyListProps> = ({ list }) => {
  const [reverseCopy, setReverseCopy] = useState(new LinkedList());

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

    setReverseCopy({ 
      ...reverseCopy, 
      ...newList 
    });
  }

  return (
    <div>
      {reverseCopy.head && <DisplayNode list={reverseCopy} />}
      <button onClick={reverseCopyList}>
        Reverse Copy
      </button>
    </div>
  )
}

export default ReverseCopyList;
