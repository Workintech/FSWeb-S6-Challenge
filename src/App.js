import React from "react";
import { useEffect, useState } from "react";
import Section from "./Section";
import axios from "axios";
import Arama from "./Arama";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  const [arama, setArama] = useState("");
  const [icerik, setIcerik] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => setData(response.data));
  }, []);

  function handleClick(name) {
    setIcerik(name === icerik ? null : name);
  }

  return (
    <div className="App">
      <h1 className="Header">Star Wars Major Characters List</h1>
      {<Arama setArama={setArama} arama={arama} />}
      {data
        .filter((person) => {
          if (arama === "") {
            return person;
          } else if (
            person.name.toLowerCase().includes(arama.toLocaleLowerCase())
          ) {
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
              setIcerik={setIcerik}
            />
          );
        })}
      {/* {films.map((person) => {
        return <Section films={person} />;
      })} */}
    </div>
  );
};

export default App;
