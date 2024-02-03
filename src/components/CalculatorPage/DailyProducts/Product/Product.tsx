import React from 'react';
import { IFood } from './../../../../API/ProductsAPI/ProductsAPI';
import cl from './Product.module.css';

interface Props {
  product: IFood;
}

function Product(props: Props) {
  return (
    <table className={cl.product}>
      <tr>
        <th colSpan={5}>{props.product.name[0].toUpperCase() + props.product.name.slice(1)}</th>
      </tr>
      <tr>
        <td>Вес</td>
        <td>Калории</td>
        <td>Белки</td>
        <td>Жиры</td>
        <td>Углеводы</td>
      </tr>
      <tr>
        <td>{props.product.weight}</td>
        <td>{props.product.calories}</td>
        <td>{props.product.proteins}</td>
        <td>{props.product.fats}</td>
        <td>{props.product.carbohydrates}</td>
      </tr>
    </table>
  );
}

export default Product;
