<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h2>Terms and Conditions</h2>

  <div class="card">
    <p>
      This is the terms and conditions of our website. Please read them carefully before using our services.
      By accessing and using our website, you agree to be bound by these terms and conditions.
      If you do not agree with any part of these terms and conditions, please do not use our website.
    </p>
    <button @click="$router.push('/migrate')">I AGREE</button>
    
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
