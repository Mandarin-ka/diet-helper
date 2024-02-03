import React, { useId } from 'react';
import cl from './TextInput.module.css';
import { UserI } from './../../../API/UserAPI/UserI';

interface Props {
  name: string;
  placeholder?: string;
  user: UserI;
  setUser: (user: UserI) => void;
}

// function change(e: React.ChangeEvent<HTMLInputElement>) {
//   if(e.target.value ===' ' || )
// }

//TODO: Validation

function TextInput(props: Props) {
  const id = useId();

  return (
    <div className={cl.text__field}>
      <label className={cl.text__field__label} htmlFor={id}>
        {props.name}
      </label>
      <input
        className={cl.text__field__input}
        type='text'
        name={id}
        id={id}
        placeholder={props.placeholder || props.name}
        onChange={(e) => props.setUser({ ...props.user, name: e.target.value })}
      />
    </div>
  );
}

export default TextInput;
