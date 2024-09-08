import { exec } from 'child_process'

export const getPdfText = (pdfFilePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const command = `pdftotext "${pdfFilePath}" -`
    exec(command, (error, stdout) => {
      if (error) {
        reject(error)
      } else {
        resolve(stdout)
      }
    })
  })
}
