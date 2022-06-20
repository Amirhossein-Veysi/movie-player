import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
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
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => setTheme(e.matches));
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Remove event listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  return (
    <div className={"App " + (theme ? "bg-dark" : "bg-white")}>
      <Header changeTheme={changeTheme} />
      <Container fluid>
        <InputBar setUrl={setUrl} />
        {!url ? <NoVideo /> : <VideoPlayer url={url} />}
      </Container>
    </div>
  );
};

export default App;
