import React from 'react'
import styled from 'styled-components'

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

const ProjectTop = styled.div`
    display: flex;
    width: 45%;
    border-radius: 5px;
    justify-content: center;
    align-items: end;
    padding-bottom: 15px;

    &:hover {
    transition: 100ms;
    transform: translateY(2px);
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

const ProjectBottom = styled.div`
    display: flex;
    width: 45%;
    border-radius: 5px;
    justify-content: center;
    align-items: start;
    padding-top: 15px;

    &:hover {
    transition: 100ms;
    transform: translateY(2px);
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

const Projects = () => {
    return (
        <Section>
            <Container >
                <ProjectTop className='box'>
                    Project1
                </ProjectTop>
                <ProjectTop className='box'>
                    Project2
                </ProjectTop>
                <ProjectBottom className='box'>
                    Project3
                </ProjectBottom>
                <ProjectBottom className='box'>
                    Project4
                </ProjectBottom>
            </Container>
        </Section>
    )
}

export default Projects