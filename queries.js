/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComic = /* GraphQL */ `
  query GetComic($id: ID!) {
    getComic(id: $id) {
      id
      title
      description
      episodes {
        items {
          id
          name
          createdAt
          updatedAt
          comicEpisodesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComics = /* GraphQL */ `
  query ListComics(
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        episodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEpisode = /* GraphQL */ `
  query GetEpisode($id: ID!) {
    getEpisode(id: $id) {
      id
      name
      pages {
        items {
          id
          bucket
          createdAt
          updatedAt
          episodePagesId
        }
        nextToken
      }
      comic {
        id
        title
        description
        episodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      comicEpisodesId
    }
  }
`;
export const listEpisodes = /* GraphQL */ `
  query ListEpisodes(
    $filter: ModelEpisodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEpisodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pages {
          nextToken
        }
        comic {
          id
          title
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        comicEpisodesId
      }
      nextToken
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      bucket
      fullsize {
        key
        width
        height
      }
      episode {
        id
        name
        pages {
          nextToken
        }
        comic {
          id
          title
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        comicEpisodesId
      }
      createdAt
      updatedAt
      episodePagesId
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bucket
        fullsize {
          key
          width
          height
        }
        episode {
          id
          name
          createdAt
          updatedAt
          comicEpisodesId
        }
        createdAt
        updatedAt
        episodePagesId
      }
      nextToken
    }
  }
`;
