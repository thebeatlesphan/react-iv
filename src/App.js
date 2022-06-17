import React, { useState } from "react";
import Navigation from "./Landing/Navigation/Navigation";
import Sidebar from "./Landing/Navigation/Sidebar";
import TitlePage from "./Landing/TitlePage/TitlePage";

function App() {
  const [side, showSide] = useState(false);

  const sidebarhandler = () => {
    showSide((prevState) => !prevState);
    console.log("hello");
  };

  return (
    <>
      <Sidebar transition={side} sidebar={sidebarhandler} />
      <Navigation sidebar={sidebarhandler} />
      <TitlePage />
    </>
  );
}

export default App;
