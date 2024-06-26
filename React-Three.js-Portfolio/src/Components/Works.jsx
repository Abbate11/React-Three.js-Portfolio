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
    -webkit-text-stroke: 1px black;
    position: relative;
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