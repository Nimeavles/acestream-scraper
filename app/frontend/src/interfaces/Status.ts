import { paths } from "@/api-types";

type StatusResponse =
  paths["/stats/"]["get"]["responses"]["200"]["content"]["application/json"];

export type ApiStatus = StatusResponse;
