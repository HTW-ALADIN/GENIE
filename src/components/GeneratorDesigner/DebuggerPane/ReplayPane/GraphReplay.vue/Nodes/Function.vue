<script lang="ts" setup>
import { Handle, Position } from "@vue-flow/core";
import type { Props } from "./Function";

// props were passed from the slot using `v-bind="customNodeProps"`
const props = defineProps<Props>();
</script>

<template>
  <div>
    <div :style="{ padding: '10px 20px' }">{{ props.label }}</div>

    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>

<style>
.vue-flow__node-function {
  background: green;
  color: #fff;
  padding: 10px;
  text-align: center;

  /* shape of a rectangle */
  width: 175px;
}
</style>
