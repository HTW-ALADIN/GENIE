<script lang="ts" setup>
import { Handle, Position } from "@vue-flow/core";
import type { Props } from "./Gate";

// props were passed from the slot using `v-bind="customNodeProps"`
const props = defineProps<Props>();
</script>

<template>
  <div>
    <div>{{ props.label }}</div>

    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>

<style>
.vue-flow__node-gate {
  display: flex;
  background: #9ca8b3;
  color: #fff;
  padding: 10px;

  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.vue-flow__node-gate {
  align-items: center;
  justify-content: center;
}
</style>
