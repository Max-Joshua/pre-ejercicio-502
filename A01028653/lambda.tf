variable "lambda_image_uri" {}

resource "aws_lambda_function" "pre-ejercicio-a01028653" {
  function_name = "pre-ejercicio-a01028653"

  runtime      = "nodejs18.x"
  handler      = "app.handler"
  image_uri    = var.lambda_image_uri
  package_type = "Image"

  role = aws_iam_role.a01028653_role_0834.arn
}
