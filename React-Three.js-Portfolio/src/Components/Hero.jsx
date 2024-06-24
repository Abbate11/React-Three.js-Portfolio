import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Hero = () => {
  return (
    <Section>
        <Nav />
    </Section>
  )
}

export default Hero