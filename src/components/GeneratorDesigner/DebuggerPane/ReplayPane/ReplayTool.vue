<script setup lang="ts">
import { ref } from "vue";

import ReplayComponent from "./GraphReplay.vue/ReplayComponent.vue";
import ReplayMap from "./ReplayMap.vue";

const replaySections = ref([
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}],
]);
</script>

<template>
  <div class="replayTool">
    <!-- <div class="replayBar">
      <ReplayMap></ReplayMap>
    </div> -->
    <div class="replayComponent">
      <ReplayComponent />
    </div>
  </div>
</template>

<style>
.replayTool {
  height: 100%;
  width: 100%;
}

.replayBar {
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  color: black;
  width: 100%;
  height: 100px;
  border: 1px black solid;
  background: white;
  z-index: 100;
}
</style>
