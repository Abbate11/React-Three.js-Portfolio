import React from 'react';
import styled from 'styled-components';
import Hero from "./Components/Hero";
import Who from "./Components/Who";
import Projects from "./Components/Projects";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import "./App.css";

const Container = styled.div`
  height: 100vh;
  background-color: #b1b1b1;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <div id="home">
        <Hero />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="who">
        <Who />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Container>
  );
}

export default App;
