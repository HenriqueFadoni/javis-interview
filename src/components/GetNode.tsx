import React, { FunctionComponent, useState } from 'react';

import Functionalities from './Functionalities';

interface Node {
  data: string,
  next: Node,
  prev: Node
}

interface GetNodeProps {
  showNode: Node,
  getNode: (search: string) => void
}

const GetNode: FunctionComponent<GetNodeProps> = ({ getNode, showNode }) => {
  let displayNode

  if (showNode) {
    displayNode = (
      <div>
        <h3>Data: {showNode.data}</h3>
        <h3>Next: {showNode.next ? showNode.next.data : 'null'}</h3>
        <h3>Prev: {showNode.prev ? showNode.prev.data : 'null'}</h3>
      </div>
    );
  }

  return (
    <>
      {displayNode && displayNode}
      <Functionalities
        functionality={getNode}
        text='Get Node'
      />
    </>
  );
}

export default GetNode;