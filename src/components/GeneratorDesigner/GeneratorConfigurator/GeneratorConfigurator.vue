<script setup lang="ts">
import { ref } from "vue";
import GESConfigurator from "./GESConfigurator.vue";
</script>

<template>
  <div class="generatorConfigurator q-pa-md">
    <GESConfigurator></GESConfigurator>
  </div>
</template>

<style>
.generatorConfigurator {
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  word-wrap: nowrap; /* https://stackoverflow.com/questions/4652654/how-to-turn-off-word-wrapping-in-html */
  white-space: pre;
  user-select: none;
}
</style>
