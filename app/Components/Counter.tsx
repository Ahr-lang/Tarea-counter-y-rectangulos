'use client'; // Necesario para usar hooks en Next.js 13+
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.error('El contador no puede ser menor que 0.'); // Error en la consola
    }
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Aumentar</button>
      <button onClick={decrement}>Disminuir</button>
    </div>
  );
};

export default Counter;