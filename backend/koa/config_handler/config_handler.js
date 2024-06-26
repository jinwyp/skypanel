/**
 * Created by JinWYP on 22/01/2017.
 *
 * 扩展配置文件路径 配置文件名分别为
 * default.js 默认配置
 * development.js 开发环境
 * testing.js 测试环境
 * staging.js 线上 staging 环境
 * production.js 线上 生产环境
 *
 */



"use strict";


const debug = require('debug')('koa-user:config');
const util  = require('util');

const env = process.env.NODE_ENV || 'development';
const defaultConfig = require('../../config/default.js');
const currentConfigFileName = require('../../config/' + env);

let config = Object.assign({env : env, NODE_ENV: env}, defaultConfig, currentConfigFileName)


// const log4jsConfig = require('./log4js-config')(config.pathLogs);
// config.log4jsConfig = log4jsConfig


// 创建log的根目录'logs'
// GDirUtil.mkdirSync(config.pathLogs)

// 创建数据库文件目录
// GDirUtil.mkdirSync(config.pathDB)

//根据不同的logType创建不同的文件目录
// for(var i = 0, len = log4jsConfig.appenders.length; i < len; i++){
//     if(log4jsConfig.appenders[i].path){
//         GDirUtil.mkdirSync(log4jsConfig.baseLogPath + log4jsConfig.appenders[i].path);
//     }
// }

let databaseType = 'sqlite';
let databaseUrl = "file:" + config.pathSQLite + "/" + config.SQLitefilename;


if (config.databaseType === 'mysql'){
    databaseType = 'mysql'
    databaseUrl = config.SQLiteUrl
}
if (config.databaseType === 'postgresql'){
    databaseType = 'postgresql'
    databaseUrl = config.SQLiteUrl
}

config.databaseUrl = databaseUrl


config.ProjectRunningLocation = process.cwd()
debug("===== Project Running Location (process.cwd()): ", process.cwd())
// console.log("===== Project Root Path (process.cwd()): ", process.cwd())

debug("===== Config " + env + ":", util.inspect(config, {showHidden: false, depth: null}))



module.exports = config;


