const path = require('path')
const pino = require('pino')
const moment = require('moment')


// 日志根目录
let baseLogPath = path.resolve(__dirname, '../../logs')


// 错误日志目录
const errorPath = "/error";
// 错误日志文件名
const errorFileName = "error";


// 响应日志目录
const responsePath = "/response";
// 响应日志文件名
const responseFileName = "response";

// pretty log
const prettyLogPath = "/prettylog";


function getLogger (logPathDir) {
    if (logPathDir) {
        baseLogPath = logPathDir
    }

    const nowDate = moment().format('YYYY-MM-DD');

    errorLogPath = baseLogPath + errorPath + "/" + nowDate + '_' +  errorFileName;
    responseLogPath = baseLogPath + responsePath + "/" + nowDate + '_' + responseFileName;
    
    prettyLogPathError = baseLogPath + prettyLogPath + "/" + nowDate + '_' + errorFileName + ".log";
    prettyLogPathResponse = baseLogPath + prettyLogPath + "/" + nowDate + '_' + responseFileName+ ".log";

    const transport = pino.transport({
        targets: [
            { target: 'pino-roll', options: { file: errorLogPath, frequency: 'daily', mkdir: true, extension:'.log' }, level: 'error' },
            { target: 'pino-roll', options: { file: responseLogPath, frequency: 'daily', mkdir: true, extension:'.log' } },
            // { target: 'pino/file', options: { destination: 1 } }, // use 2 for stderr
            { target: 'pino-pretty', options: { destination: 1, colorize: true } },
            { target: 'pino-pretty', options: { destination: prettyLogPathError, mkdir: true, colorize:false }, level: 'error' },
            { target: 'pino-pretty', options: { destination: prettyLogPathResponse, mkdir: true, colorize:false } }
        ]
    })

    const logger = pino(transport)

    return logger
}

module.exports = getLogger
