<script setup lang="ts">
import { getAppStore } from '@/store'
const store = getAppStore()

function setIsUnFold() {
  store.setIsUnFold(!store.getIsUnfold)
}
</script>

<template>
  <div flex items-center class="h-100%">
    <!-- 展开/收起 -->
    <div
      text-5
      :class="
        store.getIsUnfold ? 'i-ri-menu-fold-line' : 'i-ri-menu-unfold-fill'
      "
      cursor-pointer
      class="menu-unfold"
      @click="setIsUnFold"
    ></div>
    <!-- 面包屑 -->
  </div>
</template>

<style scoped lang="less">
.menu-unfold {
  &:hover {
    background-color: var(--el-menu-active-color);
  }
}
</style>
