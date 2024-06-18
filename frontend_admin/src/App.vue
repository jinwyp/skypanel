
<script setup lang="ts">

import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

import Layout from '@/layout/Layout.vue'

const locale = zhCn;


</script>



<template>
    <el-config-provider :locale="locale">
        <Layout></Layout>
    </el-config-provider>
  </template>


<style scoped>

</style>

