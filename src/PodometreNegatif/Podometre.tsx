import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Boutons } from "./Boutons/Boutons";

export function Podometre() {
  const [compteur, setCompteur] = useState<number>(0);

  const incrementer = () => {
    setCompteur((prevNb) => prevNb + 1);
  };

  const decrementer = () => {
    setCompteur((prevNb) => prevNb - 1);
  };

  const reinitialiser = () => {
    setCompteur(0);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center mt-5">Podomètre Négatif</h1>
          <h2 className="text-center mb-4">Compteur: {compteur}</h2>
          <Boutons
            incrementer={incrementer}
            decrementer={decrementer}
            reinitialiser={reinitialiser}
          />
        </Col>
      </Row>
    </Container>
  );
}
