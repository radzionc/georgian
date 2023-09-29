import { Ticket, TicketCategory } from '@georgian/entities/Ticket'
import { dbDocClient } from './dbClient'
import { tableName } from './tableName'
import {
  DeleteCommand,
  PutCommand,
  ScanCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb'
import { getUpdateParams } from './utils/getUpdateParams'

export const putTicket = (ticket: Ticket) => {
  const command = new PutCommand({
    TableName: tableName.tickets,
    Item: ticket,
  })

  return dbDocClient.send(command)
}

export const getAllTicketsInCategory = async (category: TicketCategory) => {
  const recursiveScan = async (
    lastEvaluatedKey?: Record<string, any>,
  ): Promise<Ticket[]> => {
    const command = new ScanCommand({
      ExclusiveStartKey: lastEvaluatedKey,
      TableName: tableName.tickets,
      FilterExpression: 'category = :category',
      ExpressionAttributeValues: {
        ':category': category,
      },
    })
    const { Items, LastEvaluatedKey } = await dbDocClient.send(command)
    const tickets = Items as Ticket[]

    return [
      ...tickets,
      ...(LastEvaluatedKey ? await recursiveScan(LastEvaluatedKey) : []),
    ]
  }

  return recursiveScan()
}

export const deleteAllTicketsInCategory = async (category: TicketCategory) => {
  const tickets = await getAllTicketsInCategory(category)

  const deletePromises = tickets.map(({ ticketNumber }) => {
    const command = new DeleteCommand({
      TableName: tableName.tickets,
      Key: {
        category,
        ticketNumber,
      },
    })

    return dbDocClient.send(command)
  })

  await Promise.all(deletePromises)
}

export type TicketKey = Pick<Ticket, 'category' | 'ticketNumber'>

export const getTicketItemParams = (Key: TicketKey) => ({
  TableName: tableName.tickets,
  Key,
})

export const updateTicket = (key: TicketKey, params: Partial<Ticket>) => {
  const command = new UpdateCommand({
    ...getTicketItemParams(key),
    ...getUpdateParams(params),
  })

  return dbDocClient.send(command)
}
