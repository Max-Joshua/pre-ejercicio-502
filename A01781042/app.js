exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Mars Lambda!"),
  };
  return response;
};
