import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error404/Error";
import Form from "./components/Form/Form";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";

function App() {
  //!HOOKS
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!access && location.pathname !== "/") {
      navigate("/");
    }
  }, [access, navigate, location.pathname]);

  //! CREDENCIALES

  // const EMAIL = 'lu@gmail.com';
  // const PASSWORD = 'pass123';

  //!HOMEWORK EXPRESS
  // function onSearch(id) {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name && !characters.find((char) => char.id === data.id)) {
  //         // setCharacters((oldChars) => [...oldChars, data]);
  //         setCharacters([...characters, data]);
  //       } else {
  //         window.alert("No hay personajes con ese ID");
  //       }
  //     });
  // }
  //! HOMEWORK ASYNC/AWAIT

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (characters.find((char) => char.id === data.id)) {
        window.alert("Ya agregaste el personaje!");
      } else if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else if (!characters.find((char) => char.id === data.id)) {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };


  //*filter no modifica el array original, crea uno nuevo.
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  //! express
  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }
  //! HOMEWORK ASYNC / AWAIT
  // const login = async (userData) => {
  //   try {
  //     const { email, password } = userData;
  //     const URL = "http://localhost:3001/rickandmorty/login/";
  //     const {data} = await axios.get(URL + `?email=${email}&password=${password}`)
  //     const { access } = data;
  //     setAccess(data);
  //     access && navigate("/home");
  //   } catch (error) {
  //     return error;
  //   }
  // }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      {/* <Cards characters={characters} onClose = {onClose} /> */}
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>

        <Route path="/" element={<Form login={login} />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/*" element={<Error />} />

        
      </Routes>
      
    </div>
  
    
  );
}
export default App;
