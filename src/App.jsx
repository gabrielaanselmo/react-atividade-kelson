import React from 'react';
import Adicao from './Adicao';
import Subtracao from './Subtracao';
import Multiplicacao from './Multiplicacao';
import Divisao from './Divisao';

function App() {
  return (
    <div>
      <Adicao num1={3} num2={4} />
      <Subtracao num1={5} num2={2} />
      <Multiplicacao num1={6} num2={7} />
      <Divisao num1={8} num2={2} />
    </div>
  );
}

export default App;