import React from "react";
import Form from "./Form";
import View from "./View";
import { ContextProvider } from "./Context";

const App = () => {
  return (
    <ContextProvider>
      <Form />
      <View />
    </ContextProvider>
  );
};

export default App;
