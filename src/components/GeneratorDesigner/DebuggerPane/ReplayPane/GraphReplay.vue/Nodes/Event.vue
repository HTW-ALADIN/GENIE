<script lang="ts" setup>
import { Handle, Position } from "@vue-flow/core";
import type { Props } from "./Event";

import "./shapes.css";

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
.vue-flow__node-event {
  background: #e05050;
  color: #fff;
  padding: 10px;
  text-align: center;

  /* stretched hexagon shape */
  aspect-ratio: 1 / cos(80deg);
  clip-path: polygon(50% -50%, 100% 50%, 50% 150%, 0 50%);
}
</style>
