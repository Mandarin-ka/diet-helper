import React from 'react';
import CalculatorPage from './pages/CalculatorPage';
import Header from './components/Header/Header';
import Router from './Router/Router';
import { getUserFromLS } from './Utils/UserStorage';
import UserModal from './components/CalculatorPage/UserModal/UserModal';

function App() {
  return (
    <div className='container' style={{ background: 'black', height: '100vh' }}>
      {!!!getUserFromLS() && <UserModal />}
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
