provider "aws" {
}

terraform {
  backend "s3" {
  }
}

resource "aws_s3_bucket" "lambda_storage" {
  bucket = "tf-${var.name}-storage"
}

data "archive_file" "local_zipped_lambda" {
  type        = "zip"
  source_dir  = "${path.module}/lambda"
  output_path = "${path.module}/lambda.zip"
}

resource "aws_s3_object" "zipped_lambda" {
  bucket = aws_s3_bucket.lambda_storage.id
  key    = "lambda.zip"
  source = data.archive_file.local_zipped_lambda.output_path
}

resource "aws_lambda_function" "api" {
  function_name = "tf-${var.name}"

  s3_bucket   = aws_s3_bucket.lambda_storage.bucket
  s3_key      = "lambda.zip"
  memory_size = "1024"

  handler = "lambda.handler"
  runtime = "nodejs20.x"
  timeout = "50"
  role    = aws_iam_role.api.arn

  environment {
    variables = {
      SENTRY_KEY : var.sentry_key,
      PADDLE_SECRET_KEY : var.paddle_secret_key
      PADDLE_API_KEY : var.paddle_api_key
    }
  }
}

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

resource "aws_cloudwatch_log_group" "logs" {
  name              = "/aws/lambda/${aws_lambda_function.api.function_name}"
  retention_in_days = 14
}