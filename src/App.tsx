import React, { useContext, createContext } from 'react';
import './App.css';
import Form from './data/GoblinBureaucracy/Form';
import generateForm, { generateRandomString } from './data/GoblinBureaucracy/Utils';
import languages from './data/Language';
import FormStore from './stores/FormStore';

function App() {
  const goblinese = languages[1];
  const formStore = useContext(FormStore);
  
  var props = generateForm(1, generateRandomString(16, goblinese), goblinese);
  const uuid = formStore.addForm(props);
  props = { ...props, uid: uuid};
  createContext(props as )
  return (
    <div className="App">
      <Form {...props} />
    </div>
  );
}

export default App;
