import React, { createContext, useState } from 'react';

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    const newCount = count - 1;
    if (newCount >= 1) {
      setCount(newCount);
    }
  }

  return (
    <CountContext.Provider value={{ count, increaseCount, decreaseCount }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };