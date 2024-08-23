<template>
  <AppHeader />
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'

</script>

<style lang="scss">

.container {
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 20px;
}

</style>
