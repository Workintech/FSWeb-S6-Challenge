import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";
import Pagination from "@mui/material/Pagination";
import { TextField } from "@mui/material";

const App = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [filmsData, setFilmsData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const charPerPage = 4;

  useEffect(() => {
    axios
      .all([
        axios.get(`https://swapi.dev/api/people/`),
        axios.get(`https://swapi.dev/api/films/`),
      ])
      .then(
        axios.spread((res1, res2) => {
          // console.log(res1);
          // console.log(res2);
          return [res1.data, res2.data[0].results];
        })
      )
      .catch((err) => console.log("Hata ile karsilasildi >", err))
      .then(([data1, data2]) => {
        console.log("data cekildi chars>", data1);
        console.log("data cekildi films>", data2);
        setCharactersData(data1);
        setFilmsData(data2);
      });
  }, []);

  const handleChange = (evt, val) => {
    setPage(val);
  };
  const handleSearch = (evt) => {
    setSearchText(evt.target.value);
  };

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // console.log(charactersData.slice(0, 2));
  // console.log(charactersData.slice(2, 4));
  // console.log(charactersData.slice(4, 6));
  return (
    <div className="App">
      <TextField
        id="outlined-basic"
        onChange={handleSearch}
        label="Search"
        variant="outlined"
      />
      {charactersData &&
        charactersData
          .filter((char) => char.name.includes(searchText))
          .slice(charPerPage * (page - 1), charPerPage * page)
          .map((char, index) => {
            return (
              <Karakter
                key={"C" + index}
                char={char}
                films={filmsData.filter((film) =>
                  char.films.includes(film.title)
                )}
              />
            );
          })}
      <Pagination
        count={Math.ceil(charactersData.length / charPerPage)}
        page={page}
        onChange={handleChange}
        color="secondary"
      />
    </div>
  );
};

export default App;
