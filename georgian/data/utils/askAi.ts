import OpenAI from 'openai'

export const askAi = async (content: string) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const { choices } = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content }],
  })

  const answer = choices[0]?.message?.content

  if (!answer) {
    throw new Error('No answer from AI')
  }

  return answer
}
