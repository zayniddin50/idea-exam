import { createContext, useState } from "react";

export const MadalContext = createContext(null);

const MadalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});

  const SetOpen = productItem => {
    setOpen(true);
    setProduct(productItem);
  };
  const CloseOpen = () => {
    setOpen(false);
  };

  return (
    <MadalContext.Provider value={{ open, SetOpen, CloseOpen, product }}>
      {children}
    </MadalContext.Provider>
  );
};

export default MadalProvider;
