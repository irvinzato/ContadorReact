import './App.css';
import yinYangLogo from './images/yinYang.png';

function App() {
  return (
    <div className='App'>
      <div className='container-logo'>
        <img className='logo' 
             src={ yinYangLogo } 
             alt='Logo seleccionado' />
      </div>
      <div className='counter-container'>
        
      </div>
    </div>
  );
}

export default App;
