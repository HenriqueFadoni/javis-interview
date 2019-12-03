import React, { FunctionComponent, useState } from 'react';
import DisplayNodeBtn from './DisplayNodeBtn';

interface Node {
  data: string,
  next: Node,
  prev: Node
}

interface DisplayNodeProps {
  list: {
    head: Node,
    tail: Node
  },
}

const DisplayNode: FunctionComponent<DisplayNodeProps> = ({ list }) => {
  const [dataDisplay, setDataDisplay] = useState(list.head);

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

export default DisplayNode;