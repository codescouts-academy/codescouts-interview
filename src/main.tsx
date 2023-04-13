import "./assets/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";

import { App } from "./App";

import theme from "./theme";

const manager = createLocalStorageManager("theme");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} colorModeManager={manager}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
