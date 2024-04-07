variable "name" {
  default = "gc-api"
}

variable "root_domain" {}

variable "zone_id" {}

variable "certificate_arn" {}

variable "users_table_arn" {}

variable "sentry_key" {}

variable "secret" {}

variable "email_secret" {}



variable "app_url" {}

variable "email_domain" {}

variable "google_client_id" {}

variable "google_client_secret" {}

variable "facebook_client_id" {}

variable "facebook_client_secret" {}

variable "linkedin_client_id" {}

variable "linkedin_client_secret" {}

variable "ses_aws_region" {
  default = "us-east-1"
}

variable "paddle_api_key" {}

variable "paddle_vendor_id" {}

variable "telegram_bot_token" {}

variable "telegram_chat_id" {}