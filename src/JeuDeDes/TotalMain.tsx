import React from "react";

interface TotalMainProps {
  mainDes: number[];
}

export function TotalMain(props: TotalMainProps) {
  const total = props.mainDes.reduce((acc, valeur) => acc + valeur, 0);

  return (
    <>
      <h3>
        <div>Total de la main: {total}</div>
      </h3>
    </>
  );
}
