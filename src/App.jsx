import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function clickPlus() {
    setCount(count + 1);
  }

  function clickMinus() {
    setCount(count - 1);
  }

  // function handleClickMinus() {
  //   setCount(count-1);
  // };

  return (
    <div>
      <button onClick={clickPlus}>
        +1
      </button>
      <span>{count}</span>
      <button onClick={clickMinus}>
        -1
      </button>
    </div>
  );
}

export default App
