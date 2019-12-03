import React, { FunctionComponent, useState } from 'react';

interface FunctionalitiesProps {
  onClickHandler: (data: string | number) => void,
  text: string
}

const Functionalities: FunctionComponent<FunctionalitiesProps> = ({ onClickHandler, text }) => {
  const [data, setData] = useState();

  const onChangeHandler = (event: any) => {
    setData(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder={text}
        onChange={onChangeHandler}
        required
      />
      <button
        onClick={() => onClickHandler(data)}
      >
        {text}
      </button>
    </div>
  )
};

export default Functionalities;