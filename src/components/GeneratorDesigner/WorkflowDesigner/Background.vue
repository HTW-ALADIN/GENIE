<script lang="ts" setup>
import { Background } from '@vue-flow/background'
</script>

<template>
  <div class="workflowBackground">
    <Background :size="2" :gap="20" pattern-color="#BDBDBD">
      <slot />
    </Background>
  </div>
</template>

<style>
.workflowBackground {
  height: 100%;
  width: 100%;
}
</style>
