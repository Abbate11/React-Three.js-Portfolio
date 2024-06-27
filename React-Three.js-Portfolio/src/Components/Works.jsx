import React, {useState} from 'react'
import styled from 'styled-components'
import WebDesign from './WebDesign'
import Development from './Development'
import DataManagement from './DataManagement'
import ProductDesign from './ProductDesign'
import SocialMedia from './SocialMedia'

const data = [
  "Web Design",
  "Development",
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
    position: relative;
`;

const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    list-style: square;
    display: flex;
    flex-direction: column;
    gap: 30px;
    white-space: nowrap;
`;

const ListItem = styled.li`
    font-size: 80px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px #28282B;
    position: relative;

    &:hover {
      transition: all 100ms ease-out;
    transform: translateY(-2px) translateX(-1px);
    text-shadow: 1px 1px 1px #838383,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
    }

    &:active {
    transition: 100ms;
    transform: translateY(6px);
    text-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
    1px 9px 3px rgba(16,16,16,0.4),
    1px 11px 5px rgba(16,16,16,0.2),
    1px 13px 17px rgba(16,16,16,0.2),
    1px 15px 30px rgba(16,16,16,0.4);
  }
`;

const Right = styled.div`
    flex: 1;
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
            {work === "Web Design" ? (<WebDesign/>) : work === "Development" ? (<Development/>)
             : work === "Data Management" ? (<DataManagement/>) : work === "Product Design" ? (<ProductDesign/>) : (<SocialMedia/>)}
          </Right>
        </Container>
    </Section>
  )
}

export default Works