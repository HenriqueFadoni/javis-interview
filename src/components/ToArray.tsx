import React, { FunctionComponent } from 'react';

interface Node {
  data: string,
  next: Node,
  prev: Node
}

interface ToArrayProps {
  list: {
    head: Node,
    tail: Node
  }
}

const ToArray: FunctionComponent<ToArrayProps> = ({ list }) => {
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

    console.log(array);
  }

  return (
    <button onClick={toArray}>
      Transform in Array
    </button>
  )
}

export default ToArray;
