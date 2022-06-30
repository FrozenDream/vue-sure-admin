<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn" size="small" :z-index="3000">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
}

img {
  -webkit-user-drag: none;
}
</style>
