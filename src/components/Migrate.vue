<script setup>
import { ref } from 'vue'

const imgUrl = new URL('../assets/cooking.gif', import.meta.url).href

</script>

<template>
  <h2>Migrating your property...</h2>

  <div class="card">
    <img :src="imgUrl" />
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.card {
  width: 50%;
  margin: auto;
}
</style>
