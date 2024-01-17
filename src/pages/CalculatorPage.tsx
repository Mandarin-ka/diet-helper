import React from 'react';
import Table from '../components/CalculatorPage/Table/Table';
import DailyProducts from '../components/CalculatorPage/DailyProducts/DailyProducts';

function CalculatorPage() {
  return (
    <div className='calculator'>
      <Table calories={2200} proteins={100} fats={1000} carbohydrates={180} weight={100} />
      <DailyProducts />
    </div>
  );
}

export default CalculatorPage;
