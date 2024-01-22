import React, { useId } from 'react';
import cl from './UserInput.module.css';
import { UserI } from './../../../../API/UserAPI/UserI';

interface Props {
  label: string;
  keyN: string;
  user: UserI;
  setUser: (user: UserI) => void;
}

function UserInput(props: Props) {
  const id = useId();

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    const temp = Object.assign({}, props.user, Object.fromEntries(new Map([[props.keyN, e.target.value]])));
    props.setUser(temp);
  }

  return (
    <div className={cl.input}>
      <label htmlFor={id} className={cl.label}>
        {props.label}
      </label>
      <input type='text' id={id} className={cl.input} onChange={(e) => change(e)} />
    </div>
  );
}

export default UserInput;
