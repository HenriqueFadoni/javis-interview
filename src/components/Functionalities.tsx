import React, { FunctionComponent, useState } from 'react';

interface FunctionalitiesProps {
  functionality: (data: string) => void,
  text: string
}

const Functionalities: FunctionComponent<FunctionalitiesProps> = ({ functionality, text }) => {
  const [data, setData] = useState();

  const onChangeHandler = (event: any) => {
    setData(event.target.value);
  }

  const onClickHandler = () => {
    if (data && data.trim()  !== '') {
      functionality(data)
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder={text}
        onChange={onChangeHandler}
        required
      />
      <button onClick={onClickHandler} >
        {text}
      </button>
    </div>
  )
};

export default Functionalities;