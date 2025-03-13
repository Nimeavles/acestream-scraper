import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "@/router/Router";
import "@/styles/index.css";
import "@fontsource/jetbrains-mono";
import "@fontsource/inter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
