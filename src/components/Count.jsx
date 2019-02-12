import React from 'react';

export default function Count({ count, increment, decrement }) {
  return (
    <div>
      <div>The count is {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
