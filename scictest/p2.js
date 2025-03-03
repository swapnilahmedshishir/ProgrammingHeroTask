import { useState, useEffect } from "react";
const Couter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Couter;
