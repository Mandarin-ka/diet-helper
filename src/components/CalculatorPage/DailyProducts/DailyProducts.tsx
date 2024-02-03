import React from 'react';
import Product from './Product/Product';
import cl from './DailyProducts.module.css';
import { IFood } from './../../../API/ProductsAPI/ProductsAPI';

interface Props {
  products: IFood[];
}

function DailyProducts(props: Props) {
  return <div className={cl.products}>
    {props.products.map(e=><Product product={e}/>)}
  </div>;
}

export default DailyProducts;
