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
  margin-top: 20px;
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
  color: white;
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
  transition: box-shadow .15s,transform .15s;

  &:active {
    transform: translateY(6px);
    box-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
    1px 9px 3px rgba(16,16,16,0.4),
    1px 11px 5px rgba(16,16,16,0.2),
    1px 13px 17px rgba(16,16,16,0.2),
    1px 15px 30px rgba(16,16,16,0.4);
  }
`;

const Button = styled.button`
  top: 50px;
  width: 100px;
  padding: 10px;
  background-color: whitesmoke;
  color:  greenyellow;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: box-shadow .15s,transform .15s;

  &:active {
    transform: translateY(6px);
    box-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
    1px 9px 3px rgba(16,16,16,0.4),
    1px 11px 5px rgba(16,16,16,0.2),
    1px 13px 17px rgba(16,16,16,0.2),
    1px 15px 30px rgba(16,16,16,0.4);
  }
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
            <a href="https://www.buymeacoffee.com/Abbate11" target="_blank" rel="noopener noreferrer">
              <Icon className='box' src="./img/bmc-button.png" alt="BMC" />
            </a>
            <a href="https://github.com/abbate11" target="_blank" rel="noopener noreferrer">
              <Icon className='box' src="./img/github.png" alt="GitHub" />
            </a>
            <Button onClick={() => scrollToSection('contact')} className='textBtn box'>Hire Now</Button>
          </Icons>
        </Container>
      </Section>
    );
  };
  
  export default Nav;
