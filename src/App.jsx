import React from "react";
import Form from "./components/Form";
import View from "./components/View";
import { ContextProvider } from "./context/Context";

const App = () => {
  return (
    <ContextProvider>
      <Form />
      <View />
    </ContextProvider>
  );
};

export default App;
