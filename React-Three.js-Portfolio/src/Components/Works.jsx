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
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
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
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ListItem = styled.li`
    font-size: 80px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    opacity: 0.8;
    position: relative;

  &:after {
      content: "${(props)=>props.text}";
      position: absolute;
      top: 0;
      left: 0;
      color: transparent;
      opacity: 1.0;
      background-image: linear-gradient(21deg,#ff76fe 0%, #8b2acd 40%, #330f86 80%);
      background-clip: text;
      width: 0px;
      overflow: hidden;
      white-space: nowrap;
    }

  &:hover {
    &:after{
      animation: moveText 0.4s linear both;

      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
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
                <ListItem className="ListItem" key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>
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