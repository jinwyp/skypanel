// Initiate the Prisma schema file

const fs = require('fs');
const path = require('path');

const config = require('./config_handler.js');



const modelsDir = path.join(__dirname, '../../prisma/schema');
const modelFiles = fs.readdirSync(modelsDir).filter(file => file.endsWith('.prisma'));

let modelsContent = '';
modelFiles.forEach(file => {
    if (file === 'schema.prisma') return;
    const filePath = path.join(modelsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    modelsContent += `\n\n\n${fileContent}`;
});


// 动态生成 schema.prisma 内容

let schemaContent = `
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
  previewFeatures = ["prismaSchemaFolder"]
}


datasource db {
  provider = "${config.databaseType}"
  url      = "${config.databaseUrl}"
}



${modelsContent}

`;


const prismaPath = path.join(__dirname, '../../prisma/schema', 'schema.prisma');
// 将 schema.prisma 内容写入文件
fs.writeFileSync(prismaPath, schemaContent);

console.log('schema.prisma has been generated successfully.', prismaPath);

