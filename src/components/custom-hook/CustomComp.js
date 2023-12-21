import React from 'react';
import { UseCounter } from './CustomHook'; 

function CounterComponent() {
  const { count, increment, decrement } = UseCounter(0);

  return (
    <div>
    <h1>Custom Hook</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterComponent;
