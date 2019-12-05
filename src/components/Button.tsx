import React, { FunctionComponent } from 'react';

interface ButtonProps {
  onClickHandler: () => void,
  text: string
}

const Button: FunctionComponent<ButtonProps> = ({ text, onClickHandler }) => (
  <button onClick={onClickHandler}>
    {text}
  </button>
)

export default Button
