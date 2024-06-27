import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [81.0, -28.5, 0], // Adjust rotation to center on Orlando
        center: [0, 0], // Center on the map
        scale: 770 // Adjust scale as needed
      }}
      style={{ width: "140%", height: "120%" }}
    >
      <Geographies
        geography="/features.json"
        fill="grey"
        stroke="greenyellow"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-81.3792, 28.5383]} // Coordinates for Orlando
        dx={90}
        dy={-30}
        connectorProps={{
          stroke: "black",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text className="textNav" x="50" y='-10' textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Orlando"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
