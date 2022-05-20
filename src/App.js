import React from "react";
import Container from "./Landing/Container/Container";
import Header from "./Landing/Header/Header";
import SecondTitle from "./Landing/SecondTitle/SecondTitle";
import Titlepage from "./Landing/TitlePage/TitlePage";

function App() {
  return (
    <Container>
      <Header />
      <Titlepage />
      <SecondTitle />
    </Container>
  );
}

export default App;
