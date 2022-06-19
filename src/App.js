import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
//components
import Header from "./components/Header/";
import InputBar from "./components/InputBar/";

const App = () => {
  const [theme, setTheme] = useState(false);
  const [url, setUrl] = useState("");

  //functions
  const changeTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  return (
    <div className={"App " + (theme ? "bg-dark" : "bg-white")}>
      <Container fluid>
        <Header changeTheme={changeTheme} />
        <InputBar setUrl={setUrl} />
      </Container>
    </div>
  );
};

export default App;
