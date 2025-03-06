<script lang="ts" setup>
import { Handle, Position } from "@vue-flow/core";
import { NodeToolbar } from "@vue-flow/node-toolbar";
import NodeResizer from "../../Util/NodeResizer";
import type { Props } from "./ComplexNode";

// props were passed from the slot using `v-bind="customNodeProps"`
const props = defineProps<Props>();
</script>

<template>
  <div>
    <NodeResizer :min-width="100" :min-height="30" />
    <NodeToolbar :is-visible="data.toolbarVisible" :position="data.toolbarPosition">
      <!-- <button>delete</button>
      <button>copy</button>
      <button>expand</button> -->
    </NodeToolbar>

    <div class="content">
      <div class="typeHeader">
        {{ props.data.type }}
      </div>
      <div class="label">{{ props.data.label }}</div>
    </div>

    <Handle type="target" :position="Position.Left" />
    <Handle type="source" :position="Position.Right" />
  </div>
</template>

<style>
.vue-flow__node-complex {
  background: white;
  color: black;
  padding: 10px;
  box-shadow: 5px 5px 15px -5px #000;
}

.vue-flow__node-complex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 60px;
}

.vue-flow__node-complex .typeHeader {
  position: absolute;
  font-size: smaller;
  top: 0;
  right: 0;
  padding: 5px;
  font-style: italic;
}

.vue-flow__node-complex .label {
  font-weight: 900;
}
</style>
