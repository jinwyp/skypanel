
<script setup lang="ts">

import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

import Layout from '@/layout/Layout.vue'

const locale = zhCn;


</script>



<template>
<div class="bg-gray-100 h-screen flex items-center justify-center">


<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

    <form>
      <div class="mb-4 flex items-center">
        <label for="email" class="block text-gray-700 mr-4 w-24">Email:</label>
        <input type="email" id="email" name="email" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>
      <div class="mb-6 flex items-center">
        <label for="password" class="block text-gray-700 mr-4 w-24">Password:</label>
        <input type="password" id="password" name="password" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">Login</button>
    </form>
  </div>

</div>
</template>


<style scoped>

</style>

