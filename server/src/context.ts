import { TrackAPI } from "./datasources/track-api";

export type DataSrouceContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};
