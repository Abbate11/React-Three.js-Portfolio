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
    justify-content: center;
    padding-top: 2%;
`;

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
    padding: 0px 5px;
    justify-content: center;
  }
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    white-space: nowrap;

    @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

const ListItem = styled.li`
    font-size: 80px;
    font-weight: bold;
    cursor: pointer;
    color: whitesmoke;
    -webkit-text-stroke: 1px #28282B;
    position: relative;
    padding: 5px;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: box-shadow .25s ease-out, transform .25s;

    @media only screen and (max-width: 768px) {
    font-size: 28px;
  }

    &:hover {
      border: 2px solid white;

      @media only screen and (max-width: 768px) {
        border: 2px solid transparent;
      }
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
    flex: 1;

    @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Works = () => {
  const [work,setWork] = useState("Web Design")
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