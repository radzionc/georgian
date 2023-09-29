import path from 'path'

export const getTicketsFilePath = (name: string) =>
  path.resolve(__dirname, `../sources/${name}.txt`)
