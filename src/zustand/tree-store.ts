import { create } from "zustand";

type State = {
  legendOfZelda: number;
  marioKart: number;
};

export const useGameStore = create<State>((set) => ({
  legendOfZelda: 0,
  marioKart: 0,
}));
