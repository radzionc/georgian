export const extractTextTickets = (text: string): string[] => {
  const result: string[] = []
  const lines = text.split('\n')
  lines.forEach((line) => {
    const isTicketStart = /^\d+\.\s/.test(line)
    if (lines.length === 0 && !isTicketStart) {
      return
    }

    if (isTicketStart) {
      result.push(line)
    } else {
      const lastTicket = result[result.length - 1]
      result[result.length - 1] = `${lastTicket}\n${line}`
    }
  })

  return result
}
