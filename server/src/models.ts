type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
  description: string;
  numberOfViews: number;
  // moduleIds: string[];
};

type ModuleModel = {
  id: string;
  title: string;
  length: number;
};

type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};

export { TrackModel, ModuleModel, AuthorModel };
