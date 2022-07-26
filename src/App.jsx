import './App.css';
import yinYangLogo from './images/yinYang.png';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {

  const handleClick = () => {
    console.log('Hiciste click');
  }

  const resetCounter = () => {
    console.log('Reinicio de contador');
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
          numClicks='x' />
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
