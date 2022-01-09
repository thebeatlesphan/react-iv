import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Front from "./components/Front/Front";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Profile/Cart";
import ProfileSettings from "./components/Profile/ProfileSettings";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [profileIsShown, setProfileIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  const showProfileHandler = () => {
    setProfileIsShown(true);
  };

  const closeProfilehandler = () => {
    setProfileIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={closeCartHandler} />}
      {profileIsShown && <ProfileSettings onClose={closeProfilehandler} />}
      <NavBar />
      <Front onShowCart={showCartHandler} onShowProfile={showProfileHandler} />
      <Contact />
    </>
  );
}

export default App;
