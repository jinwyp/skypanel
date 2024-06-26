/**
 * Created by JinWYP on 7/26/16.
 */

/**
 * config
 */

const path = require("path")

const defaultConfig = {

    https    : false,
    domain   : "sky.jscool.net",
    port     : 8000, // 程序运行的端口,

    viewStaticPath : '/static',
    pathViewTemplate : path.join(__dirname, '../views/src'),

    cookieSecret   : "very_long_koa2_tekken_nina_jin_kazama_tgfcer",
    cookieName : "koa2:session",

    visitorCookie : {
        name: "koa2:visitor",
        keys: "very_long_koa2_tekken_nina_jin_kazama_tgfcer",
        maxAge: 1000 * 3600 * 24 * 60,
        signed: false,
        overwrite: true,
        httpOnly: true,
        secure: false,
    },

    authToken : {
        secret : "koa2-user-secret-x1",
        expireDay : 7,
        fieldName : "X-Access-Token"
    },

    emailToken : {
        secret : "koa2-user-secret-email",
        expireDay : 2,
    },

    role : {
        normal : '59ae7885cba8a4766ee00eeb',
        admin : '59ae7885cba8a4766ee00eec',
    },

    // 应用目录配置
    pathLogs : path.join(__dirname, "../logs"),


    // 文件目录配置
    pathFileUpload : path.join(__dirname, "../../files/upload"),
    pathFileUploadTemp : path.join(__dirname, "../../files/upload_tmp"),
    pathFileDownload : path.join(__dirname, "../../files/download"),




    databaseType: "sqlite", // "sqlite

    // nedb 数据文件
    pathNeDB : path.join(__dirname, "../nedb/"),

    // SQLite 数据文件
    pathSQLite : path.join(__dirname, "../db_sqlite"),
    SQLitefilename : "database_sqlite.db",

}


module.exports = defaultConfig;
