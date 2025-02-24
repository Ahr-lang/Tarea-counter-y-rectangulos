interface ColorBoxProps {
    color: string;
  }
  
  const ColorBox = ({ color }: ColorBoxProps) => {
    return (
      <div
        style={{
          width: '200px',
          height: '200px',
          margin: '20px auto',
          backgroundColor: color,
          border: '1px solid #000',
        }}
      ></div>
    );
  };
  
  export default ColorBox;