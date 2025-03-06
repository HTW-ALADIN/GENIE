<script lang="ts" setup>
const props = defineProps<{ tooltip: string; target: boolean | string | Element }>();
</script>

<template>
  <q-tooltip class="tooltip">
    {{ props.tooltip }}
  </q-tooltip>
</template>

<style>
.tooltip {
  background: #000;
}
</style>
