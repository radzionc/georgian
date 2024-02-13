terraform {
  backend "s3" {}
}

resource "aws_dynamodb_table" "tickets" {
  name         = "tickets"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "category"
  range_key    = "ticketNumber"

  attribute {
    name = "category"
    type = "S"
  }

  attribute {
    name = "ticketNumber"
    type = "N"
  }
}
