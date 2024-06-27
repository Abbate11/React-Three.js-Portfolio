import React, { useRef } from 'react';
import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const Container = styled.div`
    height: 90%;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    align-self: center;
    width: 70%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`;

const Project = styled.div`
    display: flex;
    width: 45%;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: text-shadow .2s, box-shadow .3s,transform .3s;

    &:hover {
    transform: translateY(4px);
    text-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
    1px 9px 3px rgba(16,16,16,0.4),
    1px 11px 5px rgba(16,16,16,0.2),
    1px 13px 17px rgba(16,16,16,0.2);
    box-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
    1px 9px 3px rgba(16,16,16,0.4),
    1px 11px 5px rgba(16,16,16,0.2),
    1px 13px 17px rgba(16,16,16,0.2),
    1px 15px 30px rgba(16,16,16,0.4);
  }
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

const Title = styled.h3`
    z-index: 101;
`
const Button = styled.p`
    z-index: 101;
    margin-bottom: 15px;
    background-color: whitesmoke;
    width: 100px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: box-shadow .30s,transform .20s;

    &:hover{
        box-shadow: rgba(45, 35, 66, 0.4) -1px 2px 4px,
                    rgba(45, 35, 66, 0.3) 1px 7px 13px 3px,
                    #D6D6E7 1px 3px 0;
    }

    &:active{
        transform: translateY(2px);
        box-shadow: none;
    }
`;

const A = styled.a`
    z-index: 100;
    background-color: transparent;
    text-decoration: none;
    
    &:visited {
        color: inherit;
    }
`

const Projects = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <Section>
            <Container>
                <Project className='box'>
                    <Title>Project1</Title>
                    <A href="" target="_blank" rel="noopener noreferrer">
                        <Button className='textBtn'>View live</Button>
                    </A>
                </Project>
                <Project className='box' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Video loop ref={videoRef}>
                        <source src='./video/Cards.mp4' type='video/mp4' />
                    </Video>
                    <Title>Project2</Title>
                    <A href="https://abbate11.github.io/CardsPractice/" target="_blank" rel="noopener noreferrer">
                        <Button className='textBtn'>View live</Button>
                    </A>
                </Project>
                <Project className='box'>
                    <Title>Project3</Title>
                    <A href="" target="_blank" rel="noopener noreferrer">
                        <Button className='textBtn'>View live</Button>
                    </A>
                </Project>
                <Project className='box'>
                    <Title>Project4</Title>
                    <A href="" target="_blank" rel="noopener noreferrer">
                        <Button className='textBtn'>View live</Button>
                    </A>
                </Project>
            </Container>
        </Section>
    );
};

export default Projects;
