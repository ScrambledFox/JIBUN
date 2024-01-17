"use client";

import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const GlobeVisual = () => {
  const World = () => {
    const [places, setPlaces] = useState<any>([]);
    const [rings, setRings] = useState<any>([]);
    const [arcData, setArcData] = useState<any>([]);

    useEffect(() => {
      fetch("/assets/events.geojson")
        .then((res) => res.json())
        .then(({ features }) => {
          setPlaces(features);

          setRings(
            features
              .filter((d: any) => d.properties.events > 0)
              .map((d: any) => ({
                lat: d.geometry.coordinates[1],
                lng: d.geometry.coordinates[0],
              }))
          );
        });
    }, []);

    useEffect(() => {
      // Add arcs
      const arcsData = places
        .filter((d: any) => d.properties.events > 0)
        .map((d: any) => ({
          startLat: 51.43926352060737,
          startLng: 5.482926634206308,
          endLat: d.geometry.coordinates[1],
          endLng: d.geometry.coordinates[0],
        }));
      setArcData(arcsData);
    }, [places]);

    const addArc = useCallback(
      ({ start, end }: { start: []; end: [] }) => {
        setArcData([...arcData, { start, end }]);
      },
      [arcData]
    );

    const emitArc = useCallback(({ startPoint }: { startPoint: [] }) => {}, []);

    return (
      <Globe
        width={600}
        height={600}
        backgroundColor="#00000000"
        globeImageUrl={
          "https://unpkg.com/three-globe@2.30.0/example/img/earth-night.jpg"
        }
        labelsData={places}
        labelLat={(d: any) => d.geometry.coordinates[1]}
        labelLng={(d: any) => d.geometry.coordinates[0]}
        labelText={(d: any) => d.properties.name}
        labelSize={(d: any) => 0.5}
        labelDotRadius={(d: any) => 0}
        labelColor={() => "#fff"}
        labelResolution={2}
        ringsData={rings}
        ringColor={() => (t: number) => `rgba(255,100,50,${1 - t})`}
        ringMaxRadius={1}
        ringPropagationSpeed={0.5}
        ringRepeatPeriod={250}
        arcsData={arcData}
        arcDashAnimateTime={1000}
        arcDashGap={0.5}
      />
    );
  };

  return <World />;
};

export default GlobeVisual;
