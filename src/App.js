import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
//components
import Header from "./components/Header/";

const App = () => {
  const [theme, setTheme] = useState(false);

  //functions
  const changeTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  return (
    <div className={"App " + (theme ? "bg-dark" : "bg-light")}>
      <Container fluid>
        <Header changeTheme={changeTheme} />
      </Container>
    </div>
  );
};

export default App;
