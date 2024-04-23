## Setup Infrastructure

```sh
terraform init \
  -backend-config="bucket=${TF_VAR_remote_state_bucket}" \
  -backend-config="key=${TF_VAR_remote_state_key}" \
  -backend-config="region=${TF_VAR_remote_state_region}"

terraform apply
```