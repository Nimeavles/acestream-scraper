import { ConfigPage } from "@/pages/ConfigPage";
import { HomePage } from "@/pages/HomePage";

interface Route {
  path: string;
  name: string;
  component: React.ReactNode;
}

/**
 * Defines the routes for the application.
 * Each route has a name, path, and component to be rendered.
 * 
 * - "Home" route renders the HomePage component at the root path "/".
 * - "Config" route renders the ConfigPage component at the path "/config".
 * - "Not Found" route renders the HomePage component for any unmatched paths.
 */
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
