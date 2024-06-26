import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 100px;
`;

const List = styled.ul`
  display: flex;
  gap: 70px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.img`
  height: 60px;
  cursor: pointer;
  border-radius: 5px;
`;

const Button = styled.button`
  top: 50px;
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

const Nav = () => {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <Section>
        <Container>
          <Links>
            <Logo src="./img/logo.png" />
            <List>
              <ListItem className='textNav' onClick={() => scrollToSection('home')}>Home</ListItem>
              <ListItem className='textNav' onClick={() => scrollToSection('projects')}>Projects</ListItem>
              <ListItem className='textNav' onClick={() => scrollToSection('works')}>Skills</ListItem>
              <ListItem className='textNav' onClick={() => scrollToSection('contact')}>Contact</ListItem>
            </List>
          </Links>
          <Icons>
            <a href="https://www.linkedin.com/in/christian-abbate-875122294" target="_blank" rel="noopener noreferrer">
              <Icon className='box' src="./img/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/abbate11" target="_blank" rel="noopener noreferrer">
              <Icon className='box' src="./img/github.png" alt="GitHub" />
            </a>
            <Button className='textBtn box'>Hire Now</Button>
          </Icons>
        </Container>
      </Section>
    );
  };
  
  export default Nav;
