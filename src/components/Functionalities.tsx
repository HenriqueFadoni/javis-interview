import React, { FunctionComponent, useState } from 'react';
import Button from './Button';

interface FunctionalitiesProps {
  functionality: (data: string) => void,
  text: string
}

const Functionalities: FunctionComponent<FunctionalitiesProps> = ({ functionality, text }) => {
  const [data, setData] = useState();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <Button 
        text={text}
        onClickHandler={onClickHandler}
      />
    </div>
  )
};

export default Functionalities;