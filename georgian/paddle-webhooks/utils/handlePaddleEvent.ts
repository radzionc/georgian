import { Paddle, EventName } from '@paddle/paddle-node-sdk'
import { getEnvVar } from './getEnvVar'
import { updateUser } from '@georgian/db/user'

type PaddleEventHandlerInput = {
  body: string
  signature: string
}

export const handlePaddleEvent = async ({
  body,
  signature,
}: PaddleEventHandlerInput) => {
  const paddle = new Paddle(getEnvVar('PADDLE_API_KEY'))
  const secretKey = getEnvVar('PADDLE_SECRET_KEY')

  const eventData = paddle.webhooks.unmarshal(body, secretKey, signature)

  if (!eventData) {
    throw new Error('No event data after unmarshalling')
  }

  const { eventType, data } = eventData
  if (eventType === EventName.TransactionCompleted) {
    const { customData } = data
    if (customData && 'userId' in customData) {
      await updateUser(customData.userId as string, {
        lifeTimeDeal: {
          provider: 'paddle',
        },
      })
    } else {
      throw new Error('Missing userId in custom data')
    }
  } else {
    throw new Error(`Unsupported event type: ${eventType}`)
  }
}
