import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksHome() {
    return this.get("tracks");
  }

  getTrackAuthor(authorId: string) {
    return this.get(`author/${authorId}`);
  }
}