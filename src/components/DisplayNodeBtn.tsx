import React, { FunctionComponent } from 'react';

import { NodeType } from '../types';
import Button from './Button';

interface DisplayNodeBtnProps {
  next: NodeType,
  onClickHandler: () => void,
  text: string,
}

const DisplayNodeBtn: FunctionComponent<DisplayNodeBtnProps> = ({ text, next, onClickHandler }) => {
  let btnDisplay;

  if (next) {
    btnDisplay = (
      <Button 
        text={next.data}
        onClickHandler={onClickHandler}
      />
    )
  }

  return (
    <li>
      {text}:
      {next && btnDisplay}
    </li>
  )
};

export default DisplayNodeBtn
