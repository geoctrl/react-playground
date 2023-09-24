import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/main.scss";
import { Root } from "./root";

const root = createRoot(document.getElementById("app"));

root.render(<Root />);
