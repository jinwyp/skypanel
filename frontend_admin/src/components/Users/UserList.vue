<script setup lang="ts">
import { ref } from 'vue'
import { getUserListService } from '@/api/userService'


const users = ref([]);


const getUserList = async () => {
    const response = await getUserListService()
    users.value = response.data.data
    console.log(response)
    console.log(users.value)
};


getUserList()


const handleClick = () => {
  console.log('click')
}

</script>

<template>
    <el-table :data="users" height="250" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="username" label="username" width="180" />
      <el-table-column prop="email" label="email" />

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
