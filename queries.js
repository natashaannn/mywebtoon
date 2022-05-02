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
          _version
          _deleted
          _lastChangedAt
          comicEpisodesId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComics = /* GraphQL */ `
  query SyncComics(
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        episodes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
          episodePagesId
        }
        nextToken
        startedAt
      }
      comic {
        id
        title
        description
        episodes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        comic {
          id
          title
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        comicEpisodesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEpisodes = /* GraphQL */ `
  query SyncEpisodes(
    $filter: ModelEpisodeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEpisodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        pages {
          nextToken
          startedAt
        }
        comic {
          id
          title
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        comicEpisodesId
      }
      nextToken
      startedAt
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
          startedAt
        }
        comic {
          id
          title
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        comicEpisodesId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          comicEpisodesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        episodePagesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPages = /* GraphQL */ `
  query SyncPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          comicEpisodesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        episodePagesId
      }
      nextToken
      startedAt
    }
  }
`;
