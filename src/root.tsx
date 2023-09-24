import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCss, k } from "kremling";
import { Zustand } from "./zustand/zustand";

export function Root() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/zustand" element={<Zustand />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const css = k`
`;
