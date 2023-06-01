terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.0"
    }
  }
  backend "s3" {
    key = "aws/ec2-demo/terraform.tfstate"
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_iam_instance_profile" "profile-ec2" {
  name = "profile-ec2"
  role = "EC2-ECR_login"
  
}

resource "aws_instance" "server" {
  ami = "ami-053b0d53c279acc90"
  instance_type = "t2.micro"
  key_name = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.maingroup.id]
  iam_instance_profile = aws_iam_instance_profile.profile-ec2.name
  connection {
    type = "ssh"
    host = self.public_ip
    user = "ubuntu"
    private_key = var.private_key
    timeout = "4m"
}
tags = {
    Name = "terraform-deployVM"
  }
}

resource "aws_security_group" "maingroup" {
    egress = [
    {
      from_port = 0
      to_port = 0
      protocol = "-1"
      cidr_blocks = ["0.0.0.0/0"]
      ipv6_cidr_blocks = []
      prefix_list_ids = []
      security_groups = []
      self = false
      description = ""

}
    ]

    ingress = [
        {
      from_port = 22
      to_port = 22
      protocol = "tcp" 
      cidr_blocks = ["0.0.0.0/0",]
      ipv6_cidr_blocks = []
      prefix_list_ids = []
      security_groups = []
      self = false
      description = ""
      },
      {
      from_port = 80
      to_port = 80
      protocol = "tcp" 
      cidr_blocks = ["0.0.0.0/0",] 
      ipv6_cidr_blocks = []
      prefix_list_ids = []
      security_groups = []
      self = false
      description = ""
      }
    ]
}
resource "aws_key_pair" "deployer" {
  key_name = var.key_name
  public_key = var.public_key
}

output "instance_public_ip" {
  value = aws_instance.server.public_ip
  sensitive = true
}
  
