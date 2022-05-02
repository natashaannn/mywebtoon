/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComic = /* GraphQL */ `
  subscription OnCreateComic {
    onCreateComic {
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
export const onUpdateComic = /* GraphQL */ `
  subscription OnUpdateComic {
    onUpdateComic {
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
export const onDeleteComic = /* GraphQL */ `
  subscription OnDeleteComic {
    onDeleteComic {
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
export const onCreateEpisode = /* GraphQL */ `
  subscription OnCreateEpisode {
    onCreateEpisode {
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
export const onUpdateEpisode = /* GraphQL */ `
  subscription OnUpdateEpisode {
    onUpdateEpisode {
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
export const onDeleteEpisode = /* GraphQL */ `
  subscription OnDeleteEpisode {
    onDeleteEpisode {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage {
    onCreatePage {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage {
    onUpdatePage {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage {
    onDeletePage {
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
