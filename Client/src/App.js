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
  if (!access && location.pathname !== '/') {
    navigate('/');
  }
}, [access, navigate, location.pathname]); 

  
  //! CREDENCIALES
  
  // const EMAIL = 'lu@gmail.com';
  // const PASSWORD = 'pass123';


  //! EVENT HANDLERS
  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          // setCharacters((oldChars) => [...oldChars, data]);
          setCharacters([...characters, data]);
        } else {
          window.alert("El id no fue encontrado");
        }
      });
  }

  //*filter no modifica el array original, crea uno nuevo.
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

    
  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }


  const logout = () => {
    setAccess(false);
    navigate("/");
  }


  return (
    <div className="App">
     { location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      {/* <Cards characters={characters} onClose = {onClose} /> */}
      <Routes>
        <Route path="/about" element={<About/>} />

        <Route path="/detail/:id" element={<Detail/>} />

        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}>
          
        </Route>

        <Route path="/" element={<Form login={login} />} />

        <Route path="/favorites" element={<Favorites/>} />

        <Route path="*" element={<Error/>} />


      </Routes>
    </div>
  );
}

export default App;
