import React from 'react'
import styled from 'styled-components'

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
    height: 100px
`;

const List = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
display: flex;
    align-items: center;
    gap: 20px;
`;

const Icon = styled.img`
    height: 60px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 7px;
    cursor: pointer;
`;

const Nav = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/logo.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Nav