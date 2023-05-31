exports.handler = async (event, context) => {
  console.log("Received event:", JSON.stringify(event, null, 2));
  console.log("Received context:", JSON.stringify(context, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
