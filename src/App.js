import BeautifulForm from './Form.js/BeautifulForm';
import React from 'react';
import Cart from './Cart/Cart';
import FormDataDisplay from './Form.js/FormDataDisplay';
import { FormDataProvider } from './Store/FormDataContext';
function App() {
  return (<>
  <FormDataProvider>
    <Cart></Cart>
  <BeautifulForm></BeautifulForm>
  <FormDataDisplay></FormDataDisplay>
  </FormDataProvider>
  </>)

}

export default App;
