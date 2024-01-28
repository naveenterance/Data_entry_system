import React from "react";
import Form from "./components/Form";
import View from "./components/View";
import { ContextProvider } from "./context/Context";

const App = () => {
  return (
    <ContextProvider>
      <div className="lg:flex bg-slate-800  pb-16 pt-2 h-screen lg:h-full">
        <div className="lg:w-1/3  h-full bg-slate-300 rounded-lg mx-4 p-2">
          <Form />
        </div>
        <div className="lg:w-2/3  mt-4">
          <View />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
