import { createContext, useEffect, useState } from "react";

export const BaskentContext = createContext(null);

const BaskentProvider = ({ children }) => {
  const storage = localStorage.getItem("baskent-products");

  const [state, setState] = useState(JSON.parse(storage) || []);
  const addToStorage = (product) => {
    const data = state.some((item) => item?.id === product?.id);
    if (!data) {
      setState([...state, product]);
    }
  };

  useEffect(() => {
    localStorage.setItem("baskent-products", JSON.stringify(state));
  }, [state]);

  return (
    <BaskentContext.Provider value={{ addToStorage,state,setState }}>
      {children}
    </BaskentContext.Provider>
  );
};

export default BaskentProvider;
