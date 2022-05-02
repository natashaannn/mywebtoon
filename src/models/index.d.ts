import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class PhotoS3Info {
  readonly key: string;
  readonly width: number;
  readonly height: number;
  constructor(init: ModelInit<PhotoS3Info>);
}

type ComicMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EpisodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comic {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly episodes?: (Episode | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comic, ComicMetaData>);
  static copyOf(source: Comic, mutator: (draft: MutableModel<Comic, ComicMetaData>) => MutableModel<Comic, ComicMetaData> | void): Comic;
}

export declare class Episode {
  readonly id: string;
  readonly name: string;
  readonly pages?: (Page | null)[] | null;
  readonly comic?: Comic | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Episode, EpisodeMetaData>);
  static copyOf(source: Episode, mutator: (draft: MutableModel<Episode, EpisodeMetaData>) => MutableModel<Episode, EpisodeMetaData> | void): Episode;
}

export declare class Page {
  readonly id: string;
  readonly bucket: string;
  readonly fullsize: PhotoS3Info;
  readonly episode?: Episode | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Page, PageMetaData>);
  static copyOf(source: Page, mutator: (draft: MutableModel<Page, PageMetaData>) => MutableModel<Page, PageMetaData> | void): Page;
}