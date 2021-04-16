import React from 'react';
import './App.css';
import FormField, { FormFieldProps,  } from './data/GoblinBureaucracy/FormField';

function App() {
//  let form = generateForm(1, '247B', languages[1]); // goblinese

  const props:FormFieldProps = {
    label: 'Name',
    value: ''
  };

  const props2:FormFieldProps = {
    label: 'Ancestor',
    value: ''
  };

  return (
    <div className="App">
      <FormField {...props} />
      <FormField {...props2} />
    </div>
  );
}

export default App;
