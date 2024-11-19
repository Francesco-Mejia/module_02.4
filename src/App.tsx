import React from "react";
import { Podometre } from "./PodometreNegatif/Podometre";
import { JeuDeDes } from "./JeuDeDes/JeuDeDes";
import { JeuDnD } from "./D&D/JeuDnD";

function App() {
  return (
    <div>
      <Podometre />
      <JeuDeDes />
      <JeuDnD />
    </div>
  );
}

export default App;
