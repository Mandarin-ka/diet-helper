import React, { useId, useState } from 'react';
import UserInput from './UserInput/UserInput';
import cl from './UserModal.module.css';
import ApplyButton from './../../UI/ApplyButton/ApplyButton';
import { UserI } from '../../../API/UserAPI/UserI';
import { setUserToLS } from './../../../Utils/UserStorage';
import TextInput from './../../../components/UI/TextInput/TextInput';

function UserModal() {
  const id = useId();
  const [user, setUser] = useState<UserI>({
    name: '',
    age: 0,
    sex: 'man',
    weight: 95,
    height: 182,
    gain: 'lose',
    lifestyle: 1.2,
  });

  const ruLabels = ['Возраст', 'Пол', 'Вес', 'Рост', 'Цель', 'Стиль жизни'];
  const engLabels = ['age', 'sex', 'weight', 'height', 'gain', 'lifestyle'];

  function click() {
    setUserToLS(user);
  }

  return (
    <div className={cl.modal}>
      <form action='' className={cl.form} id={id}>
        <TextInput name={'Имя'} placeholder='Иван' user={user} setUser={setUser} />
        {ruLabels.map((e, i) => (
          <UserInput label={e} key={i} keyN={engLabels[i]} user={user} setUser={setUser} />
        ))}
      </form>
      <ApplyButton id={id} onClick={click}>
        Применить
      </ApplyButton>
    </div>
  );
}

export default UserModal;

//TODO: DRY principe
