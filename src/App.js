import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
import About from "./components/About/About.jsx";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error404/Error";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          // setCharacters((oldChars) => [...oldChars, data]);
          setCharacters([...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  //*filter no modifica el array original, crea uno nuevo.
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {/* <Cards characters={characters} onClose = {onClose} /> */}
      <Switch>
        <Route exact path="/about" component={About} />

        <Route exact path="/detail/:id" component={Detail} />

        <Route exact path="/home">
          <Cards characters={characters} onClose={onClose} />
        </Route>

        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
