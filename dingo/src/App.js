import {React, useState} from 'react';
import './App.css';
import Card from "./components/Card/Card"
import CardItem from './components/CardItem/CardItem';
import InputForm from './components/InputForm/InputForm';


function App() {
  const [card, useCard] = useState([])
  
  return (
    <div className="App">
      <Card/>
      <CardItem/>
      <InputForm/>
    </div>
  );
}

export default App;
