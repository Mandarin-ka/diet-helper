import React from 'react';
import cl from './Table.module.css';

interface Props {
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  weight: number;
}

function Table(props: Props) {
  const normal = {
    calories: (props.weight * 10 + 6.25 * 175 - 5 * 20 + 200).toFixed(),
    proteins: (props.weight * 1.5).toFixed(),
    fats: (props.weight * 0.8).toFixed(),
    carbohydrates: (props.weight * 2).toFixed(),
  };

  return (
    <table className={cl.table}>
      <tr className={cl.table__row}>
        <th className={cl.table__head} style={{ border: 0 }}></th>
        <th className={cl.table__head}>Калории</th>
        <th className={cl.table__head}>Белки</th>
        <th className={cl.table__head}>Жиры</th>
        <th className={cl.table__head} style={{ border: 0 }}>
          Углеводы
        </th>
      </tr>
      <tr className={cl.table__row}>
        <td
          className={cl.table__div}
          style={{ border: 0, borderTop: '1px solid black', borderBottom: '1px solid black' }}>
          Текущие
        </td>
        <td
          className={cl.table__div}
          style={
            Math.abs(1 - props.calories / +normal.calories) < 0.1
              ? { color: 'green' }
              : props.calories / +normal.calories < 0.5 || +props.calories / +normal.calories > 1.2
              ? { color: 'red' }
              : { color: '#FF5C00' }
          }>
          {props.calories}
        </td>
        <td
          className={cl.table__div}
          style={
            props.proteins / +normal.proteins > 0.9
              ? { color: 'green' }
              : props.proteins / +normal.proteins < 0.75
              ? { color: 'red' }
              : { color: '#FF5C00' }
          }>
          {props.proteins}
        </td>
        <td
          className={cl.table__div}
          style={
            props.fats / +normal.fats > 0.6 && props.fats / +normal.fats <= 1.1
              ? { color: 'green' }
              : props.fats / +normal.fats < 0.75 || props.fats / +normal.fats > 1.2
              ? { color: 'red' }
              : { color: '#FF5C00' }
          }>
          {props.fats}
        </td>
        <td
          className={cl.table__div}
          style={Object.assign(
            { border: 0, borderTop: '1px solid black', borderBottom: '1px solid black' },
            props.carbohydrates / +normal.carbohydrates <= 1.1 && props.carbohydrates / +normal.carbohydrates >= 0.5
              ? { color: 'green', border: 0, borderTop: '1px solid black', borderBottom: '1px solid black' }
              : props.carbohydrates / +normal.carbohydrates < 0.3 || props.carbohydrates / +normal.carbohydrates > 1.2
              ? { color: 'red', border: 0, borderTop: '1px solid black', borderBottom: '1px solid black' }
              : { color: '#FF5C00', border: 0, borderTop: '1px solid black', borderBottom: '1px solid black' }
          )}>
          {props.carbohydrates}
        </td>
      </tr>
      {props.weight && (
        <tr className={cl.table__row}>
          <td className={cl.table__div} style={{ border: 0 }}>
            Норма
          </td>
          <td className={cl.table__div}>{normal.calories}</td>
          <td className={cl.table__div}>{normal.proteins}</td>
          <td className={cl.table__div}>{normal.fats}</td>
          <td className={cl.table__div} style={{ border: 0 }}>
            {normal.carbohydrates}
          </td>
        </tr>
      )}
    </table>
  );
}

export default Table;
