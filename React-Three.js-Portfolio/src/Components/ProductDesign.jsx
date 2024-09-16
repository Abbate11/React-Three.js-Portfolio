import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import styled from "styled-components";

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: blue;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  color: #dfdfdf;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 15px;
    width: 320px;
    height: 50px;
    top: 20px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas style={{ width: '100%', height: '100%' }} shadows camera={{ zoom: 1 }}>
          <Stage environment="city" intensity={0.6}>
            <Shoe />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc className="textNav box">
      Crafting intuitive and user-centered product interfaces, from concept to final implementation.
      </Desc>
    </>
  );
};

export default ProductDesign;