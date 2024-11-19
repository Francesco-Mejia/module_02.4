import React from "react";
import { TotalMain } from "./TotalMain";
import { StatsDes } from "./StatsDes";

interface StatistiquesProps {
  mainDes: number[];
}

export function Statistiques(props: StatistiquesProps) {
  return (
    <>
      <TotalMain mainDes={props.mainDes} />
      <StatsDes mainDes={props.mainDes} />
    </>
  );
}
