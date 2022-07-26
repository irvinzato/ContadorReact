//Hooks
import { useState } from 'react';
import './App.css';

import yinYangLogo from './images/yinYang.png';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  //Con los hooks puedo trabajar estados(variable click) dentro de componentes
  //Ocupo el hook pasandole el valor inicial de "click" y con "setNumClicks" lo modificare dentro de las funciones
  const [ click, setNumClicks ] = useState(0);

  const handleClick = () => {
    console.log('Hiciste click');
    setNumClicks(click + 1);
  }

  const resetCounter = () => {
    console.log('Reinicio de contador');
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='container-logo'>
        <img className='logo' 
             src={ yinYangLogo } 
             alt='Logo seleccionado' />
      </div>
      <div className='counter-container'>
        <Counter
          numClicks={ click } />
        <Button 
          text='Click'
          buttonClick={ true }
          handleClick={ handleClick } />
        <Button 
          text='Reiniciar'
          buttonClick={ false }
          handleClick={ resetCounter } />
      </div>
    </div>
  );
}

export default App;
