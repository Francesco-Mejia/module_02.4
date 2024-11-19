import React from "react";

interface MainDesProps {
  mainDes: number[];
  handleClick: (index: number) => void;
}

export function MainDes(props: MainDesProps) {
  return (
    <>
      {props.mainDes.map((valeur, index) => (
        <img
          key={index}
          src={`de${valeur}.png`}
          alt={`Dé ${valeur}`}
          onClick={() => props.handleClick(index)}
        />
      ))}
    </>
  );
}
