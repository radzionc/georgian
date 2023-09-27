import { Ticket } from '@georgian/entities/Ticket'
import { dbDocClient } from './dbClient'
import { tableName } from './tableName'
import { PutCommand } from '@aws-sdk/lib-dynamodb'

export const putTicket = (ticket: Ticket) => {
  const command = new PutCommand({
    TableName: tableName.tickets,
    Item: ticket,
  })

  return dbDocClient.send(command)
}
