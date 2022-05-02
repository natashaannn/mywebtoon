/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComic = /* GraphQL */ `
  mutation CreateComic(
    $input: CreateComicInput!
    $condition: ModelComicConditionInput
  ) {
    createComic(input: $input, condition: $condition) {
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
export const updateComic = /* GraphQL */ `
  mutation UpdateComic(
    $input: UpdateComicInput!
    $condition: ModelComicConditionInput
  ) {
    updateComic(input: $input, condition: $condition) {
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
export const deleteComic = /* GraphQL */ `
  mutation DeleteComic(
    $input: DeleteComicInput!
    $condition: ModelComicConditionInput
  ) {
    deleteComic(input: $input, condition: $condition) {
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
export const createEpisode = /* GraphQL */ `
  mutation CreateEpisode(
    $input: CreateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    createEpisode(input: $input, condition: $condition) {
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
export const updateEpisode = /* GraphQL */ `
  mutation UpdateEpisode(
    $input: UpdateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    updateEpisode(input: $input, condition: $condition) {
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
export const deleteEpisode = /* GraphQL */ `
  mutation DeleteEpisode(
    $input: DeleteEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    deleteEpisode(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
