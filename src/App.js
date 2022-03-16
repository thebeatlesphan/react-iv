import React from "react";
import Header from "./UI/Header/Header";
import Information from "./UI/Information/Information";
import Titlepage from "./UI/Titlepage/Titlepage";
import Howto from "./UI/Howto/Howto";
import Ratings from "./UI/Ratings/Ratings";
import FaqSection from "./UI/FAQ/FaqSection";
import Footer from "./UI/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Titlepage />
      <Information />
      <Howto />
      <Ratings />
      <FaqSection />
      <Footer />
    </>
  );
}

export default App;
