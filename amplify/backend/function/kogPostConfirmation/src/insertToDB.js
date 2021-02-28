/* Amplify Params - DO NOT EDIT
	API_KOG_GRAPHQLAPIENDPOINTOUTPUT
	API_KOG_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /*
  this file will loop through all js modules which are uploaded to the lambda resource,
  provided that the file names (without extension) are included in the "MODULES" env variable.
  "MODULES" is a comma-delimmited string.
*/
/* eslint-disable-line */

// const https = require('https');
// const AWS = require('aws-sdk');
// const urlParse = require('url').URL;
// const appsyncUrl = process.env.API_KOG_GRAPHQLAPIENDPOINTOUTPUT;
// const region = process.env.REGION;
// const endpoint = new urlParse(appsyncUrl).hostname.toString();

exports.handler = async (event) => {
  console.log(event);
};

// const req = new AWS.HttpRequest(appsyncUrl, region);
//   var userInfo = event.Payload;
//   var createUserMutation = `mutation CreateUser($input: CreateUserInput!) {
//     createUser(input: $input){
//       id
//       email
//       owner
//       organizationID
//       status
//       firstName
//       lastName
//       role
//       createdAt
//       updatedAt
//     }
// }
//   `;

//   const item = {
//     input: {
//       id: userInfo.User.Username,
//       email: userInfo.input.inviteEmail,
//       isDisabled: false,
//       organizationID: userInfo.input.organizationID,
//       sortName:
//         userInfo.input.lastName.toLowerCase() +
//         ' ' +
//         userInfo.input.firstName.toLowerCase(),
//       status: 'CREATED',
//       isActive: true,
//       firstName: userInfo.input.firstName,
//       lastName: userInfo.input.lastName,
//       owner: userInfo.User.Username,
//       role: userInfo.input.role,
//       searchField: `${userInfo.input.inviteEmail.toLowerCase()} ${userInfo.input.inviteEmail
//         .replace('@', '')
//         .toLowerCase()} ${userInfo.input.firstName.toLowerCase()} ${userInfo.input.lastName.toLowerCase()}`,
//     },
//   };

//   req.method = 'POST';
//   req.path = '/graphql';
//   req.headers.host = endpoint;
//   req.headers['Content-Type'] = 'application/json';
//   req.body = JSON.stringify({
//     query: createUserMutation,
//     operationName: 'CreateUser',
//     variables: item,
//   });

//   const signer = new AWS.Signers.V4(req, 'appsync', true);
//   signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

//   const data = await new Promise((resolve, reject) => {
//     const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
//       result.on('data', (data) => {
//         // console.log(data.toString());
//         resolve(JSON.parse(data.toString()));
//       });
//     });

//     httpRequest.write(req.body);
//     httpRequest.end();
//   });
//   return {
//     statusCode: 200,
//     body: data,
//   };
// };
