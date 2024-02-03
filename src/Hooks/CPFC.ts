import { useMemo } from 'react';
import { IFood } from './../API/ProductsAPI/ProductsAPI';

export const useSummaryCPFC = (eatenFood: IFood[]): Partial<IFood> => {
  const result = useMemo(() => {
    return Object.values(eatenFood).reduce((acc, t) => {
      for (const [name, price] of Object.entries(t)) {
        const sumKey = `${name}`;
        if (acc[sumKey] === undefined) acc[sumKey] = 0;
        acc[sumKey] += price;
      }
      return acc;
    }, {});
  }, [eatenFood]);

  return result;
};
