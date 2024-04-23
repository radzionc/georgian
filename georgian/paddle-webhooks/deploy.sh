. ./set_env_vars.sh

yarn build
cd dist

BUCKET=tf-gc-app-paddle-webhooks-storage
BUCKET_KEY=lambda.zip
FUNCTION_NAME=tf-gc-app-paddle-webhooks

zip -r ./$BUCKET_KEY *

aws s3 cp $BUCKET_KEY s3://$BUCKET/$BUCKET_KEY
aws lambda update-function-code --function-name $FUNCTION_NAME --s3-bucket $BUCKET --s3-key $BUCKET_KEY

cd ..
