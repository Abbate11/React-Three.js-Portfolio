import React, { useRef } from 'react';
import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 20px;

    @media only screen and (max-width: 768px) {
    height: 190vh;
  }
`;

const Container = styled.div`
    height: 90%;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    align-self: center;
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    @media only screen and (max-width: 768px) {
    width: 100%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 50px;
  }
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

    @media only screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }

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
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

const Title = styled.h3`
    z-index: 101;
`;

const Button = styled.p`
    z-index: 101;
    margin-bottom: 15px;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: box-shadow .30s,transform .20s;

    @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
  }

    &:hover{
        box-shadow: rgba(12, 5, 28, 0.3) -1px 2px 4px,
                    rgba(12, 5, 28, 0.3) 1px 7px 13px 3px,
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
`;

const Projects = () => {
    const videoRefs = useRef([]);

    const handleMouseEnter = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
        }
    };

    const handleMouseLeave = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause();
            videoRefs.current[index].currentTime = 0;
        }
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
                <Project
                    className='box'
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >
                    <Video loop ref={(el) => (videoRefs.current[1] = el)}>
                        <source src='./video/Cards.mp4' type='video/mp4' />
                    </Video>
                    <Title>Travel Cards</Title>
                    <A href="https://abbate11.github.io/CardsPractice/" target="_blank" rel="noopener noreferrer">
                        <Button className='textBtn'>View live</Button>
                    </A>
                </Project>
                <Project
                    className='box'
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                >
                    <Video loop ref={(el) => (videoRefs.current[2] = el)}>
                        <source src='./video/Social.mp4' type='video/mp4' />
                    </Video>
                    <Title>Social Network API</Title>
                    <A href="https://github.com/Abbate11/SocialNetworkAPI" target="_blank" rel="noopener noreferrer">
                        <Button className='textBtn'>View Repo</Button>
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

