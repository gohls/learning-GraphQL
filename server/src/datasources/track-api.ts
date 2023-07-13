import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel, ModuleModel } from "../models";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getTrack(trackId: string) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId) {
    return this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }

  getTrackAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
}
