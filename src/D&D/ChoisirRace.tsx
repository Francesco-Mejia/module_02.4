import React from "react";
import Table from "react-bootstrap/Table";

interface ChoisirRaceProps {
  choisirRace: (race: "nain" | "humain" | "elfe") => void;
}

export function ChoisirRace(props: ChoisirRaceProps) {
  return (
    <>
      <h1>Choisir votre race</h1>
      <p>Cliquez sur l'image</p>
      <Table bordered size="sm">
        <thead>
          <tr>
            <td align="center">Nain</td>
            <td align="center">Humain</td>
            <td align="center">Elfe</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">
              <img
                src="nain.jpg"
                height="200"
                alt="nain"
                onClick={() => props.choisirRace("nain")}
              />
            </td>
            <td align="center">
              <img
                src="humain.jpg"
                height="300"
                alt="humain"
                onClick={() => props.choisirRace("humain")}
              />
            </td>
            <td align="center">
              <img
                src="elfe.jpg"
                height="250"
                alt="elfe"
                onClick={() => props.choisirRace("elfe")}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
