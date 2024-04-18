output "lambda_storage" {
  value = aws_s3_bucket.lambda_storage.bucket
}

output "function_name" {
  value = aws_lambda_function.api.function_name
}
