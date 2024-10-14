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
  bottom: 18%;
  color: #dfdfdf;

  @media only screen and (max-width: 1200px) {
    display: none;
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