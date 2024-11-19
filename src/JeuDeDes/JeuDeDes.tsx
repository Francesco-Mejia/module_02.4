import React, { useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainDes } from "./MainDes";
import { Statistiques } from "./Statistiques";

export function JeuDeDes() {
  const [mainDes, setMainDes] = useState<number[]>([1, 2, 3, 4, 5]);

  const brasserMain = () => {
    setMainDes(
      Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1)
    );
  };

  const handleClick = (index: number) => {
    const nouvelleMainDes = [...mainDes];
    nouvelleMainDes[index] = Math.floor(Math.random() * 6) + 1;
    setMainDes(nouvelleMainDes);
  };
  return (
    <div>
      <h1>Jeu de Dés</h1>
      <Button onClick={brasserMain}>Brasser la main</Button>
      <MainDes mainDes={mainDes} handleClick={handleClick} />
      <Statistiques mainDes={mainDes} />
    </div>
  );
}
