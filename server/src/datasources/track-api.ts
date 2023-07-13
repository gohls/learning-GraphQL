import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel } from "../models";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getTrackAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
}
