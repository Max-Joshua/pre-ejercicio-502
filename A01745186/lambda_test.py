from lambda_function import handler


def test_lambda_handler():
    event = {}
    context = {}
    response = handler(event, context)
    assert response['statusCode'] == 200