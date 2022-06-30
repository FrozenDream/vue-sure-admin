<script setup lang="ts">
import { ref } from 'vue'
import logo from './logo.vue'
import layoutHeader from './layoutHeader/index.vue'

import { getAppStore } from '@/store'
const store = getAppStore()

const isThemeDark = ref(false)
function onClick() {
  isThemeDark.value = !isThemeDark.value
}

const isDark = ref(false)
function onDark() {
  document.querySelector('html')!.className = isDark.value ? 'dark' : ''
  isDark.value = !isDark.value
}
function handleOpen() {}
function handleClose() {}
</script>

<template>
  <div
    class="h-100%"
    :class="isThemeDark ? 'vue-sure-admin-dark' : 'vue-sure-admin-light'"
  >
    <el-container class="h-100%">
      <el-aside :width="store.getIsUnfold ? '210px' : '64px'">
        <logo></logo>
        <el-menu
          :collapse="!store.getIsUnfold"
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <span i-ri-menu-fold-line></span>
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon>
              <span i-ri-menu-fold-line></span>
            </el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <layoutHeader></layoutHeader>
        </el-header>
        <el-main>
          <el-row class="mb-4">
            <el-button @click="onClick">主题</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
            <el-button>中文</el-button>
          </el-row>

          <el-row class="mb-4">
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
          </el-row>

          <el-row class="mb-4">
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less"></style>
