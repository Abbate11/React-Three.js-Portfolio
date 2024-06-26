import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    padding: 40px;
`;

const Container = styled.div`
    height: 100%;
    align-self: center;
    width: 70%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`;

const TopLeft = styled.div`
    width: 45%;
`

const BottomLeft = styled.div`
    width: 45%;
`

const TopRight = styled.div`
    width: 45%;
`

const BottomRight = styled.div`
    width: 45%;
`

const Projects = () => {
    return (
        <Section>
            <Container>
                <TopLeft>
                    Project1
                </TopLeft>
                <BottomLeft>
                    Project2
                </BottomLeft>
                <TopRight>
                    Project3
                </TopRight>
                <BottomRight>
                    Project4
                </BottomRight>
            </Container>
        </Section>
    )
}

export default Projects