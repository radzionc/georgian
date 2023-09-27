export const extractTextTickets = (text: string): string[] => {
  const regex = /^\d+\..*[\s\S]*?სწორი პასუხია:.*/gm
  const matches = text.match(regex)

  return (matches ?? []).map((match) => match.trim())
}
