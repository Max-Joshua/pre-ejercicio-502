def lambda_handler(event, context):

    message = f"Hello, Joshua from Lambda!"
    
    return {
        'statusCode': 200,
        'body': message
    }