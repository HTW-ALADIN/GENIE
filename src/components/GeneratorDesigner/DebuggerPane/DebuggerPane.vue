<script setup>
import { storeToRefs } from "pinia";
import { useGeneratorEditorStore } from "@/stores/GeneratorEditorStore";
import DebuggingControls from "./DebuggingControls.vue";
import StateDisplay from "./StateDisplay/StateDisplay.vue";
import ReplayTool from "./ReplayPane/ReplayTool.vue";

const editorStore = useGeneratorEditorStore();
const { sections } = storeToRefs(editorStore);
</script>

<template>
  <div class="debuggerContainer">
    <div class="debuggingControlContainer"><DebuggingControls /></div>
    <div class="stateDisplayContainer">
      <StateDisplay />
    </div>
    <div class="replayContainer">
      <ReplayTool />
    </div>
  </div>
</template>

<style>
.debuggerContainer {
  display: flex;
  flex-direction: row;
  height: 92vh;
  width: 100vw;
  background-color: white;
  user-select: none;
}

.debuggingControlContainer {
  position: absolute;
  top: 0;
  left: 50%;
  max-width: 300px;
  min-width: 280px;
  box-shadow: 5px 5px 15px -5px #000;
}

.stateDisplayContainer {
  height: 100%;
  width: 500px;
  background-color: black;
  box-shadow: 5px 5px 15px -5px #000;
}

.replayContainer {
  height: 100%;
  width: 100%;
}
</style>
