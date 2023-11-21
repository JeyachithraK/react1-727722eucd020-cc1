// src/Counter.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Counter = () => {
  // State to track the counter value
  const [count, setCount] = useState(0);

  // Function to handle button click and update the counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        Increment
      </Button>
    </div>
  );
};

export default Counter;
