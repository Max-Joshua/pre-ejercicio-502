exports.handler = async (event) => {
  try {
    console.log(event);

    // Returning a response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello friend" }),
    };
  } catch (error) {
    // Handling any errors that might occur
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};
