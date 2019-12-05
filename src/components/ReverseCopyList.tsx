import React, { FunctionComponent, useState } from 'react';

import { LinkedList, Node } from '../contructors';
import { LinkedListType } from '../types';
import DisplayNode from '../components/DisplayNode';
import Button from './Button';

const ReverseCopyList: FunctionComponent<LinkedListType> = ({ list }) => {
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
      <Button 
        text='Reverse Copy'
        onClickHandler={reverseCopyList}
      />
    </div>
  )
}

export default ReverseCopyList;
