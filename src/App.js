import React from "react";
import GlobalStyled from "./components/GlobalStyled";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
