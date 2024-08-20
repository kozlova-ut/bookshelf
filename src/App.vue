<template>
  <AppHeader />
  <main class="main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'

</script>

<style lang="scss">
.main {
  padding: 40px 0px;
}

</style>
