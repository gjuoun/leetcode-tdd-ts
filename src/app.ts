import dotenv from 'dotenv'
if (process.env.NODE_ENV !== "production"){
  dotenv.config()
}
import Logger, { LOGGING_LEVEL } from './logger'
import fs from 'fs'

const logger = Logger.getConsoleLogger("app", LOGGING_LEVEL.SILLY)


const file = fs.readFileSync('./tsconfig.json')

logger.info(file.toString().split('').slice(10, 40).join(''))