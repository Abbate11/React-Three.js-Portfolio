import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px dashed lightgray;

  @media only screen and (max-width: 1700px) {
    width: 90%;
    margin: 20px 20px 0px 20px;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 20px;
  }

  @media only screen and (max-width: 730px) {
    margin-top: 5px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 2000px) {
    gap: 10px;
  }

  @media screen and (max-width: 1700px) {
    gap: 0px
  }

  @media screen and (max-width: 1450px) {
    gap: 0px;
  }

  @media screen and (max-width: 1250px) {
    gap: 0px;
  }
`;

const Logo = styled.img`
  height: 90px;
  width: 80px;
  border-radius: 20px;

  @media screen and (max-width: 2000px) {
    height: 90px;
  }

  @media screen and (max-width: 1700px) {
    height: 90px
  }

  @media screen and (max-width: 1450px) {
    height: 80px
  }

  @media screen and (max-width: 1250px) {
    height: 75px
  }

  @media only screen and (max-width: 1000px) {
    height: 70px;
  }

  @media only screen and (max-width: 730px) {
    height: 90px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 110px;
  list-style: none;
  font-size: 125%;

  @media screen and (max-width: 2000px) {
    font-size: 110%;
  }

  @media screen and (max-width: 1700px) {
    gap: 90px;
    font-size: 110%;
  }

  @media screen and (max-width: 1450px) {
    gap: 70px;
    font-size: 105%;
  }

  @media screen and (max-width: 1250px) {
    gap: 50px;
    font-size: 100%;
  }

  @media only screen and (max-width: 1000px) {
    gap: 40px;
    font-size: 95%;
  }

  @media screen and (max-width: 900px) {
    gap: 30px;
    font-size: 90%;
  }

  @media only screen and (max-width: 768px) {
    gap: 20px;
    font-size: 85%;
  }

  @media screen and (max-width: 730px) {
    display: none;
  }

`;

const ListItem = styled.li`
  cursor: pointer;
  color: white;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media only screen and (max-width: 750px) {
    justify-content: space-between;
  }
`;

const Icon = styled.img`
  height: 60px;
  background-color: whitesmoke;
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

  @media screen and (max-width: 2000px) {
    height: 55px;
  }

  @media screen and (max-width: 1700px) {
    height: 50px;
  }

  @media screen and (max-width: 1450px) {
    height: 50px;
  }

  @media screen and (max-width: 1250px) {
    height: 45px;
  }

  @media screen and (max-width: 1000px) {
    height: 45px;
  }

  @media screen and (max-width: 900px) {
    height: 45px;
  }

  @media only screen and (max-width: 768px) {
    height: 40px;
  }

  @media screen and (max-width: 730px) {
    height: 50px;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 60px;
  font-size: 120%;
  letter-spacing: 1.5px;
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

  @media screen and (max-width: 2000px) {
    width: 100px;
    height: 55px;
    letter-spacing: 1px;
    font-size: 120%;
  }

  @media screen and (max-width: 1700px) {
    width: 100px;
    height: 50px;
    font-size: 110%;
  }

  @media screen and (max-width: 1450px) {
    width: 95px;
    height: 48px;
    font-size: 100%;
  }

  @media screen and (max-width: 1250px) {
    width: 70px;
    height: 45px;
    padding: 2px;
    font-size: 90%;
    letter-spacing: 0;
  }

  @media screen and (max-width: 1000px) {
    
  }

  @media only screen and (max-width: 768px) {
    width: 70px;
    height: 40px;
    padding: 2px;
    font-size: 90%;
    letter-spacing: 0;
  }

  @media only screen and (max-width: 730px) {
    width: 75px;
    height: 50px;
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
            <Logo className='boxBtn' src="./img/Christian-Abbate.jpg"/>
            <List>
              <ListItem className='textNav' onClick={() => scrollToSection('home')}>Home</ListItem>
              <ListItem className='textNav' onClick={() => scrollToSection('works')}>Skills</ListItem>
              <ListItem className='textNav' onClick={() => scrollToSection('projects')}>Projects</ListItem>
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
