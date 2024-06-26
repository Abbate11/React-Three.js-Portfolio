import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    height: 90vh;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const Container = styled.div`
    height: 100%;
    align-self: center;
    width: 70%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 20px;
`;

const TopLeft = styled.div`
    width: 45%;
    border-radius: 5px;
`

const BottomLeft = styled.div`
    width: 45%;
    border-radius: 5px;
`

const TopRight = styled.div`
    width: 45%;
    border-radius: 5px;
`

const BottomRight = styled.div`
    width: 45%;
    border-radius: 5px;
`

const Projects = () => {
    return (
        <Section>
            <Container >
                <TopLeft className='box'>
                    Project1
                </TopLeft>
                <BottomLeft className='box'>
                    Project2
                </BottomLeft>
                <TopRight className='box'>
                    Project3
                </TopRight>
                <BottomRight className='box'>
                    Project4
                </BottomRight>
            </Container>
        </Section>
    )
}

export default Projects