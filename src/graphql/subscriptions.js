/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      owner
      posts {
        items {
          id
          userId
          gameId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      status
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      owner
      posts {
        items {
          id
          userId
          gameId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      status
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      owner
      posts {
        items {
          id
          userId
          gameId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      status
    }
  }
`;
export const onCreateUserGame = /* GraphQL */ `
  subscription OnCreateUserGame {
    onCreateUserGame {
      id
      userId
      gameId
      user {
        items {
          id
          name
          owner
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      game {
        items {
          id
          title
          winner
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserGame = /* GraphQL */ `
  subscription OnUpdateUserGame {
    onUpdateUserGame {
      id
      userId
      gameId
      user {
        items {
          id
          name
          owner
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      game {
        items {
          id
          title
          winner
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserGame = /* GraphQL */ `
  subscription OnDeleteUserGame {
    onDeleteUserGame {
      id
      userId
      gameId
      user {
        items {
          id
          name
          owner
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      game {
        items {
          id
          title
          winner
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      title
      Moves {
        items {
          id
          gameId
          content
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      winner
      createdAt
      updatedAt
      status
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      title
      Moves {
        items {
          id
          gameId
          content
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      winner
      createdAt
      updatedAt
      status
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      title
      Moves {
        items {
          id
          gameId
          content
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      winner
      createdAt
      updatedAt
      status
    }
  }
`;
export const onCreateMove = /* GraphQL */ `
  subscription OnCreateMove {
    onCreateMove {
      id
      gameId
      game {
        id
        title
        Moves {
          nextToken
        }
        winner
        createdAt
        updatedAt
        status
      }
      content
      createdAt
      updatedAt
      status
    }
  }
`;
export const onUpdateMove = /* GraphQL */ `
  subscription OnUpdateMove {
    onUpdateMove {
      id
      gameId
      game {
        id
        title
        Moves {
          nextToken
        }
        winner
        createdAt
        updatedAt
        status
      }
      content
      createdAt
      updatedAt
      status
    }
  }
`;
export const onDeleteMove = /* GraphQL */ `
  subscription OnDeleteMove {
    onDeleteMove {
      id
      gameId
      game {
        id
        title
        Moves {
          nextToken
        }
        winner
        createdAt
        updatedAt
        status
      }
      content
      createdAt
      updatedAt
      status
    }
  }
`;
