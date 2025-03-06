<template>
  <q-page>
    <div class="workflowLayout" @mouseup="endDragging">
      <div class="workflowEditor dndflow" @drop="onDrop">
        <WorkflowDesigner />

        <div class="generatorList" :style="{ width: `${generatorListWidth}px` }">
          <div class="content">
            <Sidebar />
          </div>
          <div class="resizer" @mousedown="startDragging"></div>
        </div>
      </div>

      <div class="editorPane" :style="{ width: `${editorPaneWidth}px` }">
        <div class="resizer" @mousedown="startDragging"></div>
        <div class="content">
          <GeneratorConfigurator />
        </div>
      </div>

      <div class="debuggerPane" :style="{ height: `${debuggerPaneHeight}px` }">
        <div class="resizer" @mousedown="startDragging"></div>
        <div class="content">
          <DebuggerPane></DebuggerPane>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import WorkflowDesigner from "@/components/GeneratorDesigner/WorkflowDesigner/WorkflowDesigner.vue";
import Sidebar from "@/components/GeneratorDesigner/WorkflowDesigner/Sidebar/Sidebar.vue";
import GeneratorConfigurator from "@/components/GeneratorDesigner/GeneratorConfigurator/GeneratorConfigurator.vue";
import DebuggerPane from "@/components/GeneratorDesigner/DebuggerPane/DebuggerPane.vue";
import useDragAndDrop from "./WorkflowDesigner/useDnd";
import { useVueFlow } from "@vue-flow/core";
import { storeToRefs } from "pinia";
import { useGeneratorEditorStore } from "@/stores/GeneratorEditorStore";

const { onDrop } = useDragAndDrop();
const { onConnect, addEdges } = useVueFlow();
onConnect(addEdges);

const editorStore = useGeneratorEditorStore();
const { generatorListWidth, editorPaneWidth, debuggerPaneHeight } = storeToRefs(editorStore);

const dragHandlers: { [key: string]: EventListener } = {
  generatorList: (event: Event) => {
    generatorListWidth.value = (<MouseEvent>event).pageX;
  },
  editorPane: (event: Event) => {
    editorPaneWidth.value = window.innerWidth - (<MouseEvent>event).pageX;
  },
  debuggerPane: (event: Event) => {
    debuggerPaneHeight.value = window.innerHeight - (<MouseEvent>event).pageY;
  },
};

const startDragging = (event: MouseEvent) => {
  const target = <HTMLElement>event.target;
  const parent = <HTMLElement>target.parentElement;

  document.addEventListener("mousemove", dragHandlers[parent.classList[0]]);
};

const endDragging = () => {
  for (const dragHandlerKey of Object.keys(dragHandlers)) {
    document.removeEventListener("mousemove", dragHandlers[dragHandlerKey]);
  }
};
</script>

<style lang="scss">
.workflowLayout {
  min-height: inherit;
  width: 100vw;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.workflowEditor {
  position: absolute;
  height: 100%;
  width: 100%;
}

.generatorList {
  position: absolute;
  display: flex;
  flex-direction: row;
  background-color: $background;
  height: 99%;
  left: 0;
  top: 0;
  overflow-x: scroll;
  max-width: 10vw;
  min-width: 1vw;
}

.editorPane {
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 100%;
  right: 0;
  overflow: auto;
  max-width: 90vw;
  min-width: 1vw;
}

.editorPane .content {
  width: 100%;
}

.debuggerPane {
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 100%;
  max-height: 92%;
  min-height: 1vh;
}

.generatorList .resizer {
  border: 1px solid black;
}

.generatorList .content {
  width: 100%;
}

.editorPane .resizer {
  border: 1px solid black;
}

.debuggerPane .resizer {
  border: 1px solid black;
}

.resizer:hover {
  border: 3px solid black;
  cursor: col-resize;
}

.debuggerPane .resizer:hover {
  cursor: row-resize;
}
</style>
