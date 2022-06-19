import React, { useState } from "react";
import Navigation from "./Landing/Navigation/Navigation";
import Sidebar from "./Landing/Navigation/Sidebar";
import TitlePage from "./Landing/TitlePage/TitlePage";
import Registration from "./Registration Form/Registration";

function App() {
  const [side, showSide] = useState(false);
  const [login, showLogin] = useState(false);

  const sidebarhandler = () => {
    showSide((prevState) => !prevState);
    console.log("hello");
  };

  const loginHandler = () => {
    showLogin((prevState) => !prevState);
  };

  return (
    <>
      {login && <Registration></Registration>}
      <Sidebar transition={side} sidebar={sidebarhandler} />
      <Navigation sidebar={sidebarhandler} loginEvent={loginHandler} />
      <TitlePage />
    </>
  );
}

export default App;
