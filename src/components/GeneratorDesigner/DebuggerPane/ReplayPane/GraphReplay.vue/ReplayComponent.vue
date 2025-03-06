<script setup lang="ts">
import { ref, shallowRef } from "vue";

import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { useLayout } from "./useLayout.js";
import { initialEdges, initialNodes } from "./initial-elements.js";

import Event from "./Nodes/Event.vue";
import Function from "./Nodes/Function.vue";
import Gate from "./Nodes/Gate.vue";

const replaySections = ref([
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}],
]);

const flowId = "replay";
const nodes = ref(initialNodes);
const edges = ref(initialEdges);
const { graph, layout, previousDirection } = useLayout();

const nodeTypes = {
  event: shallowRef(Event),
  function: shallowRef(Function),
  gate: shallowRef(Gate),
};

const flowState = useVueFlow({ id: flowId });

function layoutGraph(direction: string) {
  nodes.value = layout(nodes.value, edges.value, direction);
}
</script>

<template>
  <div class="replayComponent">
    <div class="graphReplay">
      <VueFlow
        :id="flowId"
        :nodes="nodes"
        :edges="edges"
        :node-types="nodeTypes"
        @nodes-initialized="layoutGraph('TB')"
        fit-view-on-init
      >
      </VueFlow>
    </div>
  </div>
</template>

<style>
.replayComponent {
  width: 100%;
  height: 100%;
}

.graphReplay {
  width: 100%;
  height: 100%;
}
</style>
