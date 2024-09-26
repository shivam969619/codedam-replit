import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react"; // Assuming you're using Chakra UI
import App from "./App.tsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
