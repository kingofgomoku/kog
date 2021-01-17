/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserGame = /* GraphQL */ `
  query GetUserGame($id: ID!) {
    getUserGame(id: $id) {
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
export const listUserGames = /* GraphQL */ `
  query ListUserGames(
    $filter: ModelUserGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        gameId
        user {
          nextToken
        }
        game {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
        status
        elo
      }
      nextToken
    }
  }
`;
export const getMove = /* GraphQL */ `
  query GetMove($id: ID!) {
    getMove(id: $id) {
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
export const listMoves = /* GraphQL */ `
  query ListMoves(
    $filter: ModelMoveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        content
        createdAt
        updatedAt
        status
      }
      nextToken
    }
  }
`;
