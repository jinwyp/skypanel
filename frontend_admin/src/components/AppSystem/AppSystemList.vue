<script setup lang="ts">
import { ref } from 'vue'


const dataListAppSystem = [
  {
    appId: 100101,
    appName: 'Nodejs',
    appCategoryId: 101,
    appCategoryNameCN: '编程语言',
    appCategoryNameEN: 'Prommaring Language',
    description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    isInstalled: false,
    installTimes: 0,
    installScriptPath: 'install.sh',
    installBeforeScriptPath: 'install.sh',
    installAfterScriptPath: 'install.sh',
    startScriptPath: 'start.sh',
    restartScriptPath: 'restart.sh',
    stopScriptPath: 'stop.sh',
    uninstallScriptPath: 'uninstall.sh',
    showLogScriptPath: 'showlog.sh',
  },

  {
    appId: 100201,
    appName: 'mdserver-web',
    appCategoryId: 102,
    appCategoryNameCN: '系统面板',
    appCategoryNameEN: 'Linux System Panel',
    githubLink: 'https://github.com/midoks/mdserver-web',
    description: '简单的Linux面板',
    isInstalled: false,
    installTimes: 0,
    installScriptPath: 'install.sh',
    installBeforeScriptPath: 'install.sh',
    installAfterScriptPath: 'install.sh',
    startScriptPath: 'start.sh',
    restartScriptPath: 'restart.sh',
    stopScriptPath: 'stop.sh',
    uninstallScriptPath: 'uninstall.sh',
    showLogScriptPath: 'showlog.sh',
  },

  {
    appId: 100202,
    appName: '1Panel',
    appCategoryId: 102,
    appCategoryNameCN: '系统面板',
    appCategoryNameEN: 'Linux System Panel',
    githubLink: 'https://github.com/1Panel-dev/1Panel',
    description: '现代化、开源的 Linux 服务器运维管理面板',
    isInstalled: false,
    installTimes: 0,
    installScriptPath: 'install.sh',
    installBeforeScriptPath: 'install.sh',
    installAfterScriptPath: 'install.sh',
    startScriptPath: 'start.sh',
    restartScriptPath: 'restart.sh',
    stopScriptPath: 'stop.sh',
    uninstallScriptPath: 'uninstall.sh',
    showLogScriptPath: 'showlog.sh',
  },
]


const handleClick = () => {
  console.log('click')
}

</script>

<template>
    <el-table :data="dataListAppSystem" height="250" style="width: 100%">
      <el-table-column prop="appId" label="Id" width="180" />
      <el-table-column prop="appName" label="Name" width="180" />
      <el-table-column prop="installTimes" label="已安装次数" />

      <el-table-column fixed="right" label="Operations" width="300">
      <template #default>
        <el-button type="primary" size="small" @click="handleClick">
          Install
        </el-button>
        <el-button type="primary" size="small">Edit</el-button>
        <el-button type="info" size="small">Show Log</el-button>
        
      </template>
    </el-table-column>
    </el-table>
  </template>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
