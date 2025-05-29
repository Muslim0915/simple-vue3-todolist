<script setup lang="ts">

import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="app">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.app{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>