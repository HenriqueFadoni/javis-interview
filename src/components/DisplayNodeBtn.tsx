import React, { FunctionComponent } from 'react';

interface Node {
  data: string,
  next: Node,
  prev: Node
}

interface DisplayNodeBtnProps {
  next: Node,
  onClickHandler: () => void,
  text: string,
}

const DisplayNodeBtn: FunctionComponent<DisplayNodeBtnProps> = ({ text, next, onClickHandler }) => {
  let btnDisplay;

  if (next) {
    btnDisplay = (
      <button onClick={onClickHandler}>
        {next.data}
      </button>
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
