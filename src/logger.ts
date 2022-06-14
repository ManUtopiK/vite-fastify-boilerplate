import fs from 'fs'

// Create dir for logs
const logDir = './logs'

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true })
}

// Set logger options
const logger = import.meta.env.DEV
  ? {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss.l',
          ignore: 'pid,hostname'
        }
      }
    }
  : {
      level: 'warn',
      file: logDir + '/warn-logs.log'
    }

export default logger
