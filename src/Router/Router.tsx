import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalculatorPage from '../pages/CalculatorPage';

function Router(props?: { children: ReactNode }) {
  return (
    <BrowserRouter>
      {props.children}
      <Routes>
        <Route path='/' element={<CalculatorPage />} />
        <Route path='/products' element={<h2>Продукты</h2>} />
        <Route path='/recepies' element={<h2>Рецепты</h2>} />
        <Route path='/favorites' element={<h2>Избранное</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
