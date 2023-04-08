import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { Form } from "./components/Form/Form";

import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const username = "ignacio@gmail.com";
  const password = "1password";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";
    // const KEY = "831c4597aaa4.c1c7bf7f3200751b57bf";

    if (characters.find((char) => char.id === id)) {
      return alert("personaje repetido");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("ocurrio un error");
        }
      });
  };
  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((charac) => charac.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
