import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Container = styled.div`
    height: 100%;
    align-self: center;
    width: 70%;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const Title = styled.h1`
    font-size: 100px;
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #da4ea2;
    font-size: 20px
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgrey;
`;

const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 3;
    position: relative;
`;

const Img = styled.img`
    width: 700px;
    height: 800px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to{
            transform: translateY(25px);
        }
    }
`;

const Hero = () => {

  return (
    <Section>
        <Nav />
        <Container>
            <Left>
                <Title>Think. Make. Solve.</Title>
                <WhatWeDo>
                    <Line src="./img/line.png"/>
                    <Subtitle>What we Do</Subtitle>
                </WhatWeDo>
                <Desc>We enjoy creating delightful, human-centered digital experiences.</Desc>
                <Button>Learn More</Button>
            </Left>
            <Right>
                <Img src="./img/moon.png"/>
            </Right>
        </Container>
    </Section>
  )
}

export default Hero