import React from 'react';
import Table from '../components/CalculatorPage/Table/Table';

function CalculatorPage() {
  return (
    <div className='calculator'>
      <Table calories={2200} proteins={100} fats={1000} carbohydrates={180} weight={100} />
    </div>
  );
}

export default CalculatorPage;
