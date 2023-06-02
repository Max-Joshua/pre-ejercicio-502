terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

variable "aws_access_key" {}
variable "aws_secret_key" {

}

# Configure the AWS Provider
provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  sts_region = "us-east-1"
  region     = "us-east-1"
  alias      = "us_east_1"
}
