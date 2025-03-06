<script setup lang="ts">
import AppLayout from "@/components/AppLayout.vue";
</script>

<template>
  <AppLayout />
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}

#app {
  max-width: none;
  padding: 0;
  height: 100%;
}

::-webkit-scrollbar {
  width: 20px;
  height: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}
</style>
