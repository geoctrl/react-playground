import React from "react";
import { cssModules, useCssModules } from "inline-css-modules-react";
import { useGameStore } from "./tree-store";

export function Zustand() {
  useCssModules(css);

  const games = useGameStore((state) => state);

  return (
    <div className={s.test}>
      <ul className={s.list}>
        <li>Mario kart: {games.marioKart}</li>
        <li>legend of zelda: {games.legendOfZelda}</li>
      </ul>

      <button>add legend of zelda game</button>
    </div>
  );
}

const { s, css } = cssModules`
  .list {
    background-color: red;
  }
`;
