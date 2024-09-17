import React from 'react';
import styled from 'styled-components';
import Hero from "./Components/Hero";
import Who from "./Components/Who";
import Projects from "./Components/Projects";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import "./App.css";

const Container = styled.section`
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
      <section id="home">
        <Hero />
      </section>
      <section id="who">
        <Who />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Container>
  );
}

export default App;
