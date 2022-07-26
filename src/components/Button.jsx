import React from "react";

//Uso desestructuracion para no usar "props.text"
function Button( { text } ) {
  return(
    <button> { text } </button>
  );
}

export default Button;