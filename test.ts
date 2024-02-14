export type TicketHighlight = {
  start: number
  end: number
}

const getHighlights = (markdown: string): TicketHighlight[] => {
  const result: TicketHighlight[] = []
  const parts = markdown.split('**')
  let currentIndex = 0

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) {
      // Highlighted parts are at odd indices
      result.push({
        start: currentIndex,
        end: currentIndex + parts[i].length,
      })
    }
    currentIndex += parts[i].length
  }

  return result
}

// Example usage
const input = '**ვისგან** შედგება საქართველოს **მთავრობა**?'
const highlights = getHighlights(input)
console.log(highlights)
