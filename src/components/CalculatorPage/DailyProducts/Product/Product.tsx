import React from 'react';
import cl from './Product.module.css';

interface Props {
  name: string;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  weight: number;
}

function Product(props: Props) {
  return (
    <table className={cl.product}>
      <tr>
        <th colSpan={5}>{props.name[0].toUpperCase() + props.name.slice(1)}</th>
      </tr>
      <tr>
        <td>Вес</td>
        <td>Калории</td>
        <td>Белки</td>
        <td>Жиры</td>
        <td>Углеводы</td>
      </tr>
      <tr>
        <td>{props.weight}</td>
        <td>{props.calories}</td>
        <td>{props.proteins}</td>
        <td>{props.fats}</td>
        <td>{props.carbohydrates}</td>
      </tr>
    </table>
  );
}

export default Product;
