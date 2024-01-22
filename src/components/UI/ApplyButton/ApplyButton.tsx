import React from 'react';
import cl from './ApplyButton.module.css';

interface Props {
  id?: string;
  onClick?: (el?: any) => void;
  children?: string | React.ReactNode;
}

function ApplyButton(props: Props) {
  return (
    <button className={cl.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ApplyButton;
