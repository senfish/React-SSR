import React, {useState} from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}> + 1</button>
    </div>
  )
}

export default Counter;