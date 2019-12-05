import React, { FunctionComponent } from 'react';

import { LinkedListType } from '../types';
import Button from './Button';

const ToArray: FunctionComponent<LinkedListType> = ({ list }) => {
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
    <Button
      text='Transform in Array (See Console.log)'
      onClickHandler={toArray}
    />
  )
}

export default ToArray;
