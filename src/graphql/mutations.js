/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createMove = /* GraphQL */ `
  mutation CreateMove(
    $input: CreateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    createMove(input: $input, condition: $condition) {
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
export const updateMove = /* GraphQL */ `
  mutation UpdateMove(
    $input: UpdateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    updateMove(input: $input, condition: $condition) {
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
export const deleteMove = /* GraphQL */ `
  mutation DeleteMove(
    $input: DeleteMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    deleteMove(input: $input, condition: $condition) {
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
