import { HomePage } from "@/pages/HomePage";

interface Route {
  path: string;
  name: string;
  component: React.ReactNode;
}

export const ROUTES: Route[] = [
  {
    name: "Home",
    path: "/",
    component: HomePage(),
  },
  {
    name: "Not Found",
    path: "*",
    component: HomePage(),
  },
];
