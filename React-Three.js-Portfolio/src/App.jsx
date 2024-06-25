import Hero from "./Components/Hero"
import Who from "./Components/Who"
import Works from "./Components/Works"
import Contact from "./Components/Contact"
import "./App.css"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  color: white;
  background: url('./img/bg-img.jpg') no-repeat center center fixed; 
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
`

const App = () => {
  
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App