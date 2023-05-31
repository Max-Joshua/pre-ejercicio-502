export const handler = async (event, context) => {
  try {
    console.log(event)

    // Returning a response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello Juan' })
    }
  } catch (error) {
    // Handling any errors that might occur
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' })
    }
  }
}
