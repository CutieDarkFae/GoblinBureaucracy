import React from 'react';
import './App.css';
import Form from './data/GoblinBureaucracy/Form';
import generateForm, { generateRandomString } from './data/GoblinBureaucracy/Utils';
import languages from './data/Language';

function App() {
  const goblinese = languages[1];
  const props = generateForm(1, generateRandomString(16, goblinese), goblinese);

  return (
    <div className="App">
      <Form {...props} />
    </div>
  );
}

export default App;
