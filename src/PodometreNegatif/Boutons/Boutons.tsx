import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

interface BoutonsProps {
  incrementer: () => void;
  decrementer: () => void;
  reinitialiser: () => void;
}
export function Boutons(props: BoutonsProps) {
  return (
    <ButtonGroup className="d-flex">
      <Button variant="primary" onClick={props.incrementer}>
        Incrementer
      </Button>
      <Button variant="success" onClick={props.decrementer}>
        Decrementer
      </Button>
      <Button variant="warning" onClick={props.reinitialiser}>
        Reinitialiser
      </Button>
    </ButtonGroup>
  );
}
