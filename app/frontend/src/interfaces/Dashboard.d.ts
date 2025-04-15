import { components } from "@/types/api-types";

export type DashboardData = {
  stats: components["schemas"]["Stats"];
  channels: components["schemas"]["Channel"][];
  urls: components["schemas"]["URL"][];
};
