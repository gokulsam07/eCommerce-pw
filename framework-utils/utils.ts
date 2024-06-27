import * as fs from 'fs';
import * as path from 'path';

export function readJsonFile(relativeFilePath: string): any {
  const dataPath = path.join(__dirname, '..', relativeFilePath)
  const fileContent = fs.readFileSync(dataPath, 'utf8')
  return JSON.parse(fileContent);
}

export function generateUniqueEmail(): string {
  const timestamp = Date.now()
  console.log(`testuser${timestamp}@example.com`)
  return `testuser${timestamp}@example.com`
}

export function generateRandomPhoneNumber(): string {
    const randomNumber = Math.floor(9000000000 + Math.random() * 1000000000)
    return '9' + randomNumber.toString().substring(1)
}








