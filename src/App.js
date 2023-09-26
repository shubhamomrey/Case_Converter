import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextRotator from "./components/TextChanger";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

const removeBodyClasses = () => {
   document.body.classList.remove('bg-light');
   document.body.classList.remove('bg-dark');
   document.body.classList.remove('bg-danger');
   document.body.classList.remove('bg-success');
   document.body.classList.remove('bg-warning');
}
  const toggleMode = (cls) => {
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "lightgrey";
      showAlert(" Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" Light mode has been enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <NavBar title="Shubham's aap" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

      <Routes>
        <Route
          exact path="/"
          element={
            <div className="container">
              <TextRotator />
              <TextForm
                showAlert={showAlert}
                heading="Enter Text Here for converting"
                mode={mode}
              />
            </div>
            }
            />

        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
