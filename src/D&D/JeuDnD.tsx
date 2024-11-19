import React, { useState } from "react";
import { ChangerStats } from "./ChangerStats";
import { ChoisirRace } from "./ChoisirRace";

const raceBonus = {
  nain: {
    force: 2,
    intelligence: -1,
    dexterite: 0,
    charisme: -2,
    endurance: 3,
  },
  humain: {
    force: 1,
    intelligence: 1,
    dexterite: 1,
    charisme: 1,
    endurance: 1,
  },
  elfe: {
    force: -1,
    intelligence: 2,
    dexterite: 3,
    charisme: 0,
    endurance: -1,
  },
};

type Race = keyof typeof raceBonus;

function getRandomStat() {
  return Math.floor(Math.random() * (12 - 6 + 1)) + 6;
}

function generateBaseStats() {
  return {
    force: getRandomStat(),
    intelligence: getRandomStat(),
    dexterite: getRandomStat(),
    charisme: getRandomStat(),
    endurance: getRandomStat(),
  };
}

export function JeuDnD() {
  const [phase, setPhase] = useState<"choisirRace" | "changerStats">(
    "choisirRace"
  );
  const [race, setRace] = useState<Race | null>(null);
  const [stats, setStats] = useState<Record<string, number> | null>(null);
  const [pointsRestants, setPointsRestants] = useState(5);

  function choisirRace(raceChoisie: Race) {
    const baseStats = generateBaseStats();
    const bonus = raceBonus[raceChoisie];

    const finalStats = {
      force: baseStats.force + bonus.force,
      intelligence: baseStats.intelligence + bonus.intelligence,
      dexterite: baseStats.dexterite + bonus.dexterite,
      charisme: baseStats.charisme + bonus.charisme,
      endurance: baseStats.endurance + bonus.endurance,
    };

    setRace(raceChoisie);
    setStats(finalStats);
    setPhase("changerStats");
  }

  function incrementerStatistique(stat: string) {
    if (pointsRestants > 0 && stats) {
      setStats({ ...stats, [stat]: stats[stat] + 1 });
      setPointsRestants(pointsRestants - 1);
    }
  }

  if (phase === "choisirRace") {
    return <ChoisirRace choisirRace={choisirRace} />;
  }

  if (phase === "changerStats" && stats) {
    return (
      <ChangerStats
        stats={stats}
        pointsRestants={pointsRestants}
        incrementerStatistique={incrementerStatistique}
      />
    );
  }

  return null;
}
