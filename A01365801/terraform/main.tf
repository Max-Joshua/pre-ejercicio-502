provider "aws" {
  region = "us-east-1"
}

resource "aws_lambda_function" "ivan-practice-example" {
    function_name    = "example_lambda"
    filename         = "../function.zip" # the file we just zipped
    source_code_hash = filebase64sha256("../function.zip")
    role             = aws_iam_role.lambda_exec.arn
    handler          = "index.handler"
    runtime          = "nodejs14.x"
}

resource "aws_iam_role" "lambda_exec" {
    name = "lambda_exec"

    assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Effect": "Allow",
            "Sid": ""
        }
    ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "lambda_exec_policy" {
    role       = aws_iam_role.lambda_exec.name
    policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}