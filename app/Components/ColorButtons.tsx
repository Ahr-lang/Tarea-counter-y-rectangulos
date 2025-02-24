'use client'; // Necesario para usar hooks en Next.js 13+
import { useState } from 'react';
import ColorBox from './ColorBox';

const ColorButtons = () => {
  const [color, setColor] = useState('gray');
  const colors = ['red', 'blue', 'green', 'yellow'];

  return (
    <div>
      <ColorBox color={color} />
      <div>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{ backgroundColor: c, margin: '5px', padding: '10px', border: 'none', cursor: 'pointer' }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorButtons;