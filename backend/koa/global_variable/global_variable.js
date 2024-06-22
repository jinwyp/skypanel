
// const makeDebug  = require('debug');
const debug = require('debug')('koa-user:global_variable');


global.GDirUtil = require('../common-libs/create-directory.js')
global.GMathUtil = require('../common-libs/math.js')

global.GConfig = require('../config_handler/config_handler.js')


global.GLogger = require('../logger/logger_pino.js')(GConfig.pathLogs)

global.GProjectPath = process.cwd()
debug("===== Project Running Location (process.cwd()): ", process.cwd())
// console.log("===== Project Root Path (process.cwd()): ", process.cwd())


global.GSystemError = require('../errors/SystemError')
global.GPageNotFoundError = require('../errors/PageNotFoundError')
global.GValidationError = require('../errors/ValidationError')
global.GUnauthenticatedAccessError = require('../errors/UnauthenticatedAccessError')

// global.GDataChecker = require('./app-user/business-libs/data-checker')

