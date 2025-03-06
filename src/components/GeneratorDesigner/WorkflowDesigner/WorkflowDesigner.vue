<script setup lang="ts">
import { shallowRef } from "vue";
import { VueFlow, useVueFlow, MarkerType } from "@vue-flow/core";
import { Controls } from "@vue-flow/controls";
import Background from "@/components/GeneratorDesigner/WorkflowDesigner/Background.vue";
import useDragAndDrop from "./useDnd";
import type { Node } from "@vue-flow/core";
import { handleNodeClick } from "./EventHandlers";
import { useGeneratorStore } from "@/stores/GeneratorStore";
import { storeToRefs } from "pinia";

import ComplexNode from "@/components/GeneratorDesigner/WorkflowDesigner/Nodes/NodeTypes/ComplexNode/ComplexNode.vue";
import LoopNode from "@/components/GeneratorDesigner/WorkflowDesigner/Nodes/NodeTypes/LoopNode/LoopNode.vue";

const { onDragOver, onDragLeave, isDragOver } = useDragAndDrop();
type DragOver = (...args: unknown[]) => void;

export interface CustomData {
  hello: string;
  color: string;
  label: string;
}

export interface CustomEvents {
  onCustomEvent: (event: MouseEvent) => void;
  [key: string]: (event: MouseEvent) => void;
}

type CustomNodeTypes = "custom" | "test";

type CustomNode = Node<CustomData, CustomEvents, CustomNodeTypes>;

const generatorStore = useGeneratorStore();
const { elements } = storeToRefs(generatorStore);

const flowId = "editor";
const { onNodeContextMenu } = useVueFlow({ id: flowId });

const nodeTypes = {
  complex: shallowRef(ComplexNode),
  loop: shallowRef(LoopNode),
};

onNodeContextMenu((params) => {
  console.log(params);
});
</script>

<template>
  <VueFlow
    :nodes="elements.nodes"
    :edges="elements.edges"
    :node-types="nodeTypes"
    :id="flowId"
    @dragover="onDragOver as DragOver"
    @dragleave="onDragLeave"
    @node-click="handleNodeClick"
    elevate-edges-on-select
  >
    <!-- TODO: correctly configure VueFlow-Component to render arrow :connection-line-options="{markerEnd: MarkerType.Arrow, width: 50, height: 50 }"-->
    <Controls
      :style="{
        top: 0,
        left: '250px',
      }"
    />

    <Background
      :style="{
        backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
        transition: 'background-color 0.2s ease',
      }"
    >
    </Background>
  </VueFlow>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import "@vue-flow/core/dist/style.css";

/* import the default theme, this is optional but generally recommended */
@import "@vue-flow/core/dist/theme-default.css";

/* import default controls styles */
@import "@vue-flow/controls/dist/style.css";

.vue-flow__edge > * {
  stroke: black;
}
</style>
