import React, { FunctionComponent, useState } from 'react';

import Button from './Button';

interface InsertBetweenProps {
  insertNode: (node: string, data: string) => void,
  text: string
}

const InsertBetween: FunctionComponent<InsertBetweenProps> = ({ insertNode, text }) => {
  const [data, setData] = useState();
  const [node, setNode] = useState();

  const onChangeNodeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNode(event.target.value);
  }

  const onChangeDataHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  }

  const onClickHandler = () => {
    if ((data && data.trim() !== '') && (node && node.trim() !== '')) {
      insertNode(node, data);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder='New Node'
        onChange={onChangeNodeHandler}
        required
      />
      <input
        type="text"
        placeholder={text}
        onChange={onChangeDataHandler}
        required
      />
      <Button 
        text={text} 
        onClickHandler={onClickHandler} 
      />
    </div>
  )
}

export default InsertBetween
