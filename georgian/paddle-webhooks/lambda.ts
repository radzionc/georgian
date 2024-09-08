import { AWSLambda } from '@sentry/serverless'
import { getEnvVar } from './utils/getEnvVar'
import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from 'aws-lambda'
import { reportError } from '@georgian/app/errors/errorMonitoring'
import { handlePaddleEvent } from './utils/handlePaddleEvent'

type ProxyHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>

AWSLambda.init({
  dsn: getEnvVar('SENTRY_KEY'),
})

const paddleSignatureHeader = 'paddle-signature'

const webhookHandler: ProxyHandler = async ({ body, headers }) => {
  try {
    if (!body) {
      throw new Error('Received empty body from Paddle')
    }

    const signature = headers[paddleSignatureHeader]
    if (!signature) {
      throw new Error(`Missing ${paddleSignatureHeader} header`)
    }

    await handlePaddleEvent({
      body,
      signature,
    })
  } catch (err) {
    reportError(err, {
      body,
      headers,
    })

    return {
      statusCode: 500,
    }
  }

  return {
    statusCode: 200,
  }
}

export const handler = AWSLambda.wrapHandler(webhookHandler)
