import React, { FunctionComponent, useState } from 'react';

import Functionalities from './Functionalities';

interface Node {
  data: string,
  next: Node,
  prev: Node
}

interface SearchNodeProp {
  list: {
    head: Node
    tail: Node
  }
}

const SearchNode: FunctionComponent<SearchNodeProp> = ({ list }) => {
  const [searchResponse, setSearchResponse] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const checkNodeExists = (search: string) => {
    let node = { ...list.head };
    let isDone = false;
    let answer = false;

    while (!isDone) {
      if (node.data === search) {
        answer = true;
        isDone = true;
      } else if (node.next) {
        node = node.next;
      } else {
        answer = false;
        isDone = true;
      }
    }

    setSearchResponse(answer);
  }

  const onClickHandler = (value: string) => {
    checkNodeExists(value)
    setIsSearching(true);
  }

  const responseDisplay = (
    <h3>
      {searchResponse ? 'true' : 'false'}
    </h3>
  )

  return (
    <div>
      {isSearching && responseDisplay}
      <Functionalities
        functionality={onClickHandler}
        text='Check If An Element Exists'
      />
    </div>
  )
};

export default SearchNode
