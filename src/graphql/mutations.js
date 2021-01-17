/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserGame = /* GraphQL */ `
  mutation CreateUserGame(
    $input: CreateUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    createUserGame(input: $input, condition: $condition) {
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
export const updateUserGame = /* GraphQL */ `
  mutation UpdateUserGame(
    $input: UpdateUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    updateUserGame(input: $input, condition: $condition) {
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
export const deleteUserGame = /* GraphQL */ `
  mutation DeleteUserGame(
    $input: DeleteUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    deleteUserGame(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createMove = /* GraphQL */ `
  mutation CreateMove(
    $input: CreateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    createMove(input: $input, condition: $condition) {
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
export const updateMove = /* GraphQL */ `
  mutation UpdateMove(
    $input: UpdateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    updateMove(input: $input, condition: $condition) {
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
export const deleteMove = /* GraphQL */ `
  mutation DeleteMove(
    $input: DeleteMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    deleteMove(input: $input, condition: $condition) {
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
