import React from 'react';
import Karakter from './components/Karakter';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Karakterler from './components/karakterler';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [data, setData] = useState([]);
const [isloading, setIsLoading] = useState(true);
useEffect(() => {
  setIsLoading(true);
  axios
  .get("https://swapi.dev/api/people/")
  .then((res) => {
    console.log(res.data.results);
    setData(res.data.results);
  setIsLoading(false);
  })
  .catch(err => {
    console.warn(err.message);
  });
},[]);  
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
    {isloading ? <p>LOADING...</p>:<Karakterler data = {data}/> }
    </div>
    
  );
}

export default App;
