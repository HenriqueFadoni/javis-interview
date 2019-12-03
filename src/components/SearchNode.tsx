import React, { FunctionComponent, useState } from 'react';

import Functionalities from './Functionalities';

interface SearchNodeProp {
  response: boolean | null,
  searchItem: (data: string) => void
}

const SearchNode: FunctionComponent<SearchNodeProp> = ({ response, searchItem }) => {
  const [isSearching, setIsSearching] = useState(false);

  const onClickHandler = (value: string) => {
    searchItem(value)
    setIsSearching(true);
  }

  const responseDisplay = (
    <h3>
      {response ? 'true' : 'false'}
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
