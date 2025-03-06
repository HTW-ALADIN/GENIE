<script lang="ts" setup>
import { Handle, Position } from "@vue-flow/core";
import type { Props } from "./LoopNode";
import NodeResizer from "../../Util/NodeResizer";

import { NodeToolbar } from "@vue-flow/node-toolbar";

// props were passed from the slot using `v-bind="customNodeProps"`
const props = defineProps<Props>();
</script>

<template>
  <div>
    <NodeResizer :min-width="100" :min-height="30" />
    <NodeToolbar :is-visible="data.toolbarVisible" :position="data.toolbarPosition">
      <button>delete</button>
      <button>copy</button>
      <button>expand</button>
    </NodeToolbar>

    <div :style="{ padding: '10px 20px' }">{{ props.data.label }}</div>

    <Handle type="source" :position="Position.Left" />
    <Handle type="source" :position="Position.Top" />
    <Handle type="target" :position="Position.Bottom" />
    <Handle type="target" :position="Position.Right" />
  </div>
</template>

<style>
.vue-flow__node-loop {
  background: #53a2ec;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
}
</style>
