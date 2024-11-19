import React from "react";

interface StatsDesProps {
  mainDes: number[];
}

export function StatsDes(props: StatsDesProps) {
  const comptage = Array(6).fill(0);
  props.mainDes.forEach((valeur) => comptage[valeur - 1]++);

  return (
    <>
      <h3>
        {comptage.map((compte, index) => (
          <div key={index}>
            Nombre de {index + 1}: {compte}
          </div>
        ))}
      </h3>
    </>
  );
}
