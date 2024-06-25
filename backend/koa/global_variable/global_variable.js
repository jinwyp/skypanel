
// const makeDebug  = require('debug');
const debug = require('debug')('koa-user:global_variable');


global.GDirUtil = require('../common-libs/create-directory.js')
global.GMathUtil = require('../common-libs/math.js')

global.GConfig = require('../config_handler/config_handler.js')


global.GLogger = require('../logger/logger_pino.js')(GConfig.pathLogs)




global.GSystemError = require('../errors/SystemError')
global.GPageNotFoundError = require('../errors/PageNotFoundError')
global.GValidationError = require('../errors/ValidationError')
global.GUnauthenticatedAccessError = require('../errors/UnauthenticatedAccessError')

global.GDataChecker = require('../field_checker/data_checker.js')

global.GPrisma = require('../database_connect/prisma_connect.js')
