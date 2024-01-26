import React from "react";
import Forma from "./Form";
import View from "./View";
import Context from "./Context";

const App = () => {
  return (
    <Context>
      <Forma />
      <View />
    </Context>
  );
};

export default App;
