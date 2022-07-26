import React from 'react';
import '../styles/Button.css'

//Uso desestructuracion para no usar "props.text"... "handleClick" es una función que se ejecutara al dar click
function Button( { text, buttonClick, handleClick } ) {
  return(
    <button className={ buttonClick ? 'button-click' : 'button-restart' }
            onClick={ handleClick }> { text } </button>
  );
}

export default Button;