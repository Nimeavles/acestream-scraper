import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTES } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ component, name, path }) => (
          <Route path={path} element={component} key={name} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
