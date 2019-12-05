import React, { FunctionComponent, useState, useEffect } from 'react';

import DisplayNodeBtn from './DisplayNodeBtn';
import { LinkedListType } from '../types';

const DisplayNode: FunctionComponent<LinkedListType> = ({ list }) => {
  const [dataDisplay, setDataDisplay] = useState(list.head);

  useEffect(() => {
    setDataDisplay(list.head);
  }, [list])

  const nextNode = () => {
    const nextData = {
      ...dataDisplay.next
    };
    setDataDisplay(nextData);
  }

  const prevNode = () => {
    const prevData = {
      ...dataDisplay.prev
    };
    setDataDisplay(prevData);
  }

  return (
    <div>
      <h3>Current Node Display</h3>
      <ul>
        <li>data: {dataDisplay.data}</li>
        <DisplayNodeBtn
          text='next'
          next={dataDisplay.next}
          onClickHandler={nextNode}
        />
        <DisplayNodeBtn
          text='prev'
          next={dataDisplay.prev}
          onClickHandler={prevNode}
        />
      </ul>
    </div>
  )
};

export default DisplayNode
