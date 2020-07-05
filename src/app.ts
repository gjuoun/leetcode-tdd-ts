import dotenv from 'dotenv'
if (process.env.NODE_ENV !== "production"){
  dotenv.config()
}
import Logger, { LOGGING_LEVEL } from './logger'

const logger = Logger.getConsoleLogger("app", LOGGING_LEVEL.SILLY)


