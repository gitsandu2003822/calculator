
import React, {useState} from 'react';
import './App.css';

function App(){

  const [input,setInput] = useState('');

  const handleClick = (value) =>{

    if(value === 'C'){

    }

  };






  return (
    <>
      <form>
        <div className="container">
          <input type="text" value={input} readOnly />
        </div>

        <div className="keypad">
          <button type="button" className="span-two" onClick={() => handleClick('Clear')}>Clear</button>
          <button type="button" onClick={() => handleClick('C')}></button>
          <button type="button" onClick={() => handleClick('/')}>/</button>
          <button type="button" onClick={() => handleClick('7')}>7</button>
          <button type="button" onClick={() => handleClick('8')}>8</button>
          <button type="button" onClick={() => handleClick('9')}>9</button>
          <button type="button" onClick={() => handleClick('*')}>*</button>
          <button type="button" onClick={() => handleClick('4')}>4</button>
          <button type="button" onClick={() => handleClick('5')}>5</button>
          <button type="button" onClick={() => handleClick('6')}>6</button>
          <button type="button" onClick={() => handleClick('-')}>-</button>
          <button type="button" onClick={() => handleClick('1')}>1</button>
          <button type="button" onClick={() => handleClick('2')}>2</button>
          <button type="button" onClick={() => handleClick('3')}>3</button>
          <button type="button" onClick={() => handleClick('+')}>+</button>
          <button type="button" onClick={() => handleClick('0')}>0</button>
          <button type="button" onClick={() => handleClick('.')}>.</button>
          <button type="button" className="two-span" onClick={() => handleClick('=')}>=</button>
        </div>
      </form>
    </>
  );
}

export default App;
