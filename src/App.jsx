import { useState } from "react";

import Form from "./Form";
import View from "./View";
import { MyFormProvider, MyForm } from "./MyForm";

function App() {
  const [entries, setEntries] = useState([]);
  return (
    <>
      {/* <MyFormProvider>
        <Form setEntries={setEntries} />
      </MyFormProvider> */}

      <MyFormProvider>
        <MyForm setEntries={setEntries} />
      </MyFormProvider>
      <View entries={entries} />
    </>
  );
}

export default App;
