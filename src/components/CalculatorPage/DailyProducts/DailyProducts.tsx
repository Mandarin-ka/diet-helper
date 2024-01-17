import React from 'react';
import Product from './Product/Product';
import cl from './DailyProducts.module.css';

function DailyProducts() {
  return (
    <div className={cl.products}>
      <Product name={'сосиска'} calories={100} proteins={13} fats={14} carbohydrates={5} weight={120} />
      <Product name={'яйцо'} calories={30} proteins={23} fats={1} carbohydrates={12} weight={90} />
    </div>
  );
}

export default DailyProducts;
