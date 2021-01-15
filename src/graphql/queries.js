/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
        owner
        posts {
          nextToken
        }
        createdAt
        updatedAt
        status
      }
      nextToken
    }
  }
`;
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMove = /* GraphQL */ `
  query GetMove($id: ID!) {
    getMove(id: $id) {
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
export const listMoves = /* GraphQL */ `
  query ListMoves(
    $filter: ModelMoveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameId
        game {
          id
          title
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
      nextToken
    }
  }
`;
