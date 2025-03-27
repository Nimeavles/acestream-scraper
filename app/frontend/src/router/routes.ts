import { ConfigPage } from "@/pages/ConfigPage";
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
    name: "Config",
    path: "/config",
    component: ConfigPage(),
  },
  {
    name: "Not Found",
    path: "*",
    component: HomePage(),
  },
];
