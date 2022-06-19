import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import axios from "axios";
import App from "./App";

axios.defaults.baseURL = "https://d-chronicles.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";
const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);
