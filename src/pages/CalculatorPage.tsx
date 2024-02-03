import React, { useState } from 'react';
import Table from '../components/CalculatorPage/Table/Table';
import DailyProducts from '../components/CalculatorPage/DailyProducts/DailyProducts';
import { IFood } from './../API/ProductsAPI/ProductsAPI';
import { useSummaryCPFC } from './../Hooks/CPFC';

const stub: IFood[] = [
  { name: 'Яйцо', calories: 140, proteins: 12, fats: 11, carbohydrates: 1, weight: 100 },
  { name: 'Творог', calories: 160, proteins: 30, fats: 4, carbohydrates: 3, weight: 180 },
  { name: 'Грудка', calories: 12, proteins: 12, fats: 11, carbohydrates: 1, weight: 50 },
  { name: 'пирожок', calories: 330, proteins: 10, fats: 3, carbohydrates: 30, weight: 110 },
];

function CalculatorPage() {
  const [eatenFood, setEatenFood] = useState<IFood[]>(stub);

  return (
    <div className='calculator'>
      <Table
        calories={useSummaryCPFC(eatenFood).calories}
        proteins={useSummaryCPFC(eatenFood).proteins}
        fats={useSummaryCPFC(eatenFood).fats}
        carbohydrates={useSummaryCPFC(eatenFood).carbohydrates}
        weight={useSummaryCPFC(eatenFood).weight}
      />
      <DailyProducts products={eatenFood} />
    </div>
  );
}

export default CalculatorPage;
