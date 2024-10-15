import React, {useState} from 'react'
import styled from 'styled-components'
import WebDesign from './WebDesign'
import Development from './Development'
import DataManagement from './DataManagement'
import ProductDesign from './ProductDesign'
import SocialMedia from './SocialMedia'

const data = [
  "Website Design",
  "App Development",
  "Data Management",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 320px;
    padding-top: 2%;
`;

const Container = styled.div`
    width: 80%;
    height: 100%;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 10%;

    @media only screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    padding-right: 5%;
    width: 50%;
    height: 60%;

    @media only screen and (max-width: 2200px) {
      width: 40vw;
    }

    @media only screen and (max-width: 1200px) {
    height: 40vh;
    width: 40vw;
    justify-content: center;
    margin-top: 5%;
    padding-right: 0;
  }
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    white-space: nowrap;

    @media only screen and (max-width: 1200px) {
    gap: 5%;
  }
`;

const ListItem = styled.li`
    font-size: 6rem;
    font-weight: bold;
    cursor: pointer;
    color: whitesmoke;
    -webkit-text-stroke: 2px blue;
    position: relative;
    padding: 10px 0px;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: box-shadow .25s ease-out, transform .25s;

    @media only screen and (max-width: 2200px) {
      font-size: 4.5rem;
    }

    @media only screen and (max-width: 1700px) {
      font-size: 4rem;
    }


    @media only screen and (max-width: 1200px) {
    font-size: 4rem;
    padding: 10px 0px;
  }

    &:hover {
      border: 2px solid white;
    }

    &:active {
    transform: translateY(4px);
    box-shadow: 1px 1px 1px #919191 inset,
        1px 2px 1px #919191 inset,
        1px 3px 1px #919191 inset,
        1px 4px 1px #919191 inset,
    1px 18px 6px rgba(16,16,16,0.4) inset,
    1px 22px 10px rgba(16,16,16,0.2) inset,
    1px 25px 35px rgba(16,16,16,0.2) inset,
    1px 30px 60px rgba(16,16,16,0.4) inset;
    border: 2px solid transparent;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;

    @media only screen and (max-width: 1200px) {
    height: 40vh;
    width: 100%;
    align-items: center;
  }
`;

const Works = () => {
  const [work,setWork] = useState("")
  return (
    <Section>
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                <ListItem className="ListItem textWorks" key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>
              ))}
            </List>
          </Left>
          <Right>
            {work === "Website Design" ? (<WebDesign/>) : work === "App Development" ? (<Development/>)
             : work === "Data Management" ? (<DataManagement/>) : work === "Product Design" ? (<ProductDesign/>) : (<SocialMedia/>)}
          </Right>
        </Container>
    </Section>
  )
}

export default Works