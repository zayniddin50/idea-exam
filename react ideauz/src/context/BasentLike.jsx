import { createContext, useEffect, useState } from "react";

export const BasentLike = createContext(null);

const BasentProvider = ({ children }) => {
  const store = localStorage.getItem("baskent-like");

  const [isLike, setIsLike] = useState(JSON.parse(store) || []);

  const addTOlike = (product) => {
    const setData = isLike.some((wrap) => wrap?.id === product?.id);
    if (!setData) {
      setIsLike([...isLike, product]);
    }
  };

  useEffect(() => {
    localStorage.setItem("baskent-like", JSON.stringify(isLike));
  }, [isLike]);

  return (
    <BasentLike.Provider value={{ addTOlike, isLike, setIsLike }}>
      {children}
    </BasentLike.Provider>
  );
};

export default BasentProvider;
