import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
//components
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import NoVideo from "./components/NoVideo";
import VideoPlayer from "./components/VideoPlayer";

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
        {!url ? <NoVideo /> : <VideoPlayer url={url} />}
      </Container>
    </div>
  );
};

export default App;
