var pino = require("pino")
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  timeStamp:true
})

module.exports = logger