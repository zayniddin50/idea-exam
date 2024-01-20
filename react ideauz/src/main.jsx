import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routers.jsx";
import MadalProvider from "./context/MadalContext.jsx";
import BaskentProvider from "./context/BaskentContext.jsx";
import BasentProvider from "./context/BasentLike.jsx";
import SearchProvider from "./context/SearchContext.jsx";
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BasentProvider>
        <BaskentProvider>
          <SearchProvider>
            <MadalProvider>
              <BrowserRouter>
                <Routers />
              </BrowserRouter>
            </MadalProvider>
          </SearchProvider>
        </BaskentProvider>
      </BasentProvider>
    </ClerkProvider>
  </ChakraProvider>
);
