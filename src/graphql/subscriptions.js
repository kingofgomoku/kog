/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($players: String) {
    onCreateGame(players: $players) {
      id
      winner
      players
      createdAt
      updatedAt
      status
      Moves {
        items {
          id
          authorId
          players
          gameId
          content
          createdAt
          updatedAt
          status
        }
        nextToken
      }
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($players: String) {
    onUpdateGame(players: $players) {
      id
      winner
      players
      createdAt
      updatedAt
      status
      Moves {
        items {
          id
          authorId
          players
          gameId
          content
          createdAt
          updatedAt
          status
        }
        nextToken
      }
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($players: String) {
    onDeleteGame(players: $players) {
      id
      winner
      players
      createdAt
      updatedAt
      status
      Moves {
        items {
          id
          authorId
          players
          gameId
          content
          createdAt
          updatedAt
          status
        }
        nextToken
      }
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
          createdAt
          updatedAt
          status
          elo
        }
        nextToken
      }
      game {
        items {
          id
          winner
          players
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
          createdAt
          updatedAt
          status
          elo
        }
        nextToken
      }
      game {
        items {
          id
          winner
          players
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
          createdAt
          updatedAt
          status
          elo
        }
        nextToken
      }
      game {
        items {
          id
          winner
          players
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
      id
      name
      games {
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
      elo
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
      id
      name
      games {
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
      elo
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
      id
      name
      games {
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
      elo
    }
  }
`;
export const onCreateMove = /* GraphQL */ `
  subscription OnCreateMove($players: String) {
    onCreateMove(players: $players) {
      id
      authorId
      players
      gameId
      game {
        id
        winner
        players
        createdAt
        updatedAt
        status
        Moves {
          nextToken
        }
      }
      content
      createdAt
      updatedAt
      status
    }
  }
`;
export const onUpdateMove = /* GraphQL */ `
  subscription OnUpdateMove($players: String) {
    onUpdateMove(players: $players) {
      id
      authorId
      players
      gameId
      game {
        id
        winner
        players
        createdAt
        updatedAt
        status
        Moves {
          nextToken
        }
      }
      content
      createdAt
      updatedAt
      status
    }
  }
`;
export const onDeleteMove = /* GraphQL */ `
  subscription OnDeleteMove($players: String) {
    onDeleteMove(players: $players) {
      id
      authorId
      players
      gameId
      game {
        id
        winner
        players
        createdAt
        updatedAt
        status
        Moves {
          nextToken
        }
      }
      content
      createdAt
      updatedAt
      status
    }
  }
`;
