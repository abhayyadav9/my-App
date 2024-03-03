import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { type } from "@testing-library/user-event/dist/type";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

// let inpt = prompt("enter the title")

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#004880";
      showAlert("Dark Mode Enable", "succes");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enable", "succes");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text converter"
          about="about me"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div>
          <Alert alert={alert} />
        </div>

        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>

          <Route path="/textform">
            <TextForm
              showAlert={showAlert}
              heading="Hello i am Text Converter"
              mode={mode}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
