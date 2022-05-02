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
          comicEpisodesId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          comicEpisodesId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          comicEpisodesId
        }
        nextToken
      }
      createdAt
      updatedAt
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
