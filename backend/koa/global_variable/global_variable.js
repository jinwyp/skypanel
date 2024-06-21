
// const makeDebug  = require('debug');
const debug = require('debug')('koa-user:global_variable');


global.GDirUtil = require('../common-libs/create-directory.js')
global.GMathUtil = require('../common-libs/math.js')

global.GConfig = require('../config_handler/config_handler.js')


// global.GLogger = require('./koa2/koa2-middleware/logger-log4js').logger

global.GProjectPath = process.cwd()
debug("===== Project Running Location (process.cwd()): ", process.cwd())
// console.log("===== Project Root Path (process.cwd()): ", process.cwd())

// global.GSystemError = require('./koa2/errors/SystemError')
// global.GPageNotFoundError = require('./koa2/errors/PageNotFoundError')
// global.GValidationError = require('./koa2/errors/ValidationError')
// global.GUnauthenticatedAccessError = require('./koa2/errors/UnauthenticatedAccessError')

// global.GDataChecker = require('./app-user/business-libs/data-checker')

