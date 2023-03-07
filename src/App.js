import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Section from './Section';
import Arama from './Arama';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  const [arama, setArama] = useState("");
  const [icerik, setİcerik] = useState("");

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then((response) => {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[]);
  function handleClick(name) {
    setİcerik(name=== icerik ? null : name);
  }

  return (
    <div className="App">
      <h1 className="Header">Star Wars Karakter Listesi</h1>
      {<Arama setArama={setArama} arama={arama}/>}
      {data 
      .filter((person) => {
        if(arama === "") {
          return person;
        }
        else if (
          person.name.toLowerCase().includes(arama.toLocaleLowerCase())
        ){
        return person;
      }
    })
      .map((person) => {
        return (
          <Section
          key={person.name}
          data={person}
          handleClick={handleClick}
          icerik={icerik}
          setİcerik={setİcerik}/>
        );
      })}
    </div>
  );
}

export default App;
