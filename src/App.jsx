import { useState } from "react";

import View from "./View";
import { FormProvider, Form } from "./Form";

function App() {
  const [entries, setEntries] = useState([]);
  return (
    <>
      <FormProvider>
        <Form setEntries={setEntries} />
      </FormProvider>
      <View entries={entries} />
    </>
  );
}

export default App;
