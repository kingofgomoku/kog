/* Amplify Params - DO NOT EDIT
	API_KOG_GRAPHQLAPIENDPOINTOUTPUT
	API_KOG_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  try {
    console.log(event);
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
  } catch (e) {
    return { msg: 'insertMove failed for some reason, check your input' };
  }
};
