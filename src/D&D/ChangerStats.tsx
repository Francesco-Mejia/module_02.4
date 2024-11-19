import React from "react";
import Button from "react-bootstrap/Button";

type Stats = Record<string, number>;

interface ChangerStatsProps {
  stats: Stats;
  pointsRestants: number;
  incrementerStatistique: (stat: string) => void;
}

export function ChangerStats(props: ChangerStatsProps) {
  return (
    <>
      <h1>Valider le profil</h1>
      <h3>Points à assigner: 5 points</h3>

      <ul>
        {Object.entries(props.stats).map(([stat, valeur]) => (
          <li key={stat}>
            {stat.charAt(0).toUpperCase() + stat.slice(1)}: {valeur} / 18;
            <Button
              variant="warning"
              size="sm"
              className="m-1"
              onClick={() => props.incrementerStatistique(stat)}
              disabled={props.pointsRestants <= 0 || valeur >= 18}
            >
              incrementer
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
