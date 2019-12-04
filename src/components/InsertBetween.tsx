import React, { FunctionComponent, useState } from 'react';

interface Node {
  data: string,
  next: Node,
  prev: Node
}

interface InsertBetweenProps {
  insertNode: (node: string, data: string) => void,
  text: string
}

const InsertBetween: FunctionComponent<InsertBetweenProps> = ({ insertNode, text }) => {
  const [data, setData] = useState();
  const [node, setNode] = useState();

  const onChangeNodeHandler = (event: any) => {
    setNode(event.target.value);
  }

  const onChangeDataHandler = (event: any) => {
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
      <button onClick={onClickHandler} >
        {text}
      </button>
    </div>
  )
}

export default InsertBetween
