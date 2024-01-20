import { createContext, useState } from "react";

export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
    const [states,setStatess] = useState("");
  return <SearchContext.Provider value={{states,setStatess}} >{children}</SearchContext.Provider>;
};

export default SearchProvider;
