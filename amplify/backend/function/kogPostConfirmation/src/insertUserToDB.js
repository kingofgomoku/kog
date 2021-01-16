const axios = require('axios');

//  export const createUser = /* GraphQL */ `
//   mutation CreateUser(
//     $input: CreateUserInput!
//     $condition: ModelUserConditionInput
//   ) {
//     createUser(input: $input, condition: $condition) {
//       id
//       name
//       owner
//       posts {
//         items {
//           id
//           userId
//           gameId
//           createdAt
//           updatedAt
//         }
//         nextToken
//       }
//       createdAt
//       updatedAt
//       status
//     }
//   }
// `;
async function createUser(userInfo) {
  var createUser = /* GraphQL */ `
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        id
      }
    }
  `;

  var data = JSON.stringify({
    query: createUser,
    variables: { input: userInfo },
  });
  var params = {
    method: 'post',
    url: endpoint,
    headers: {
      Authorization: accessToken,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  var res = await axios(params);
  console.log(JSON.stringify(res.data));
}

module.exports = { createUser };
