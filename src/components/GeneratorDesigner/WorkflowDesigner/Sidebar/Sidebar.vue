<script setup>
import useDragAndDrop from "../useDnd";
import { storeToRefs } from "pinia";
import { useGeneratorEditorStore } from "@/stores/GeneratorEditorStore";
import Tooltip from "./ToolTip.vue";
import { ref } from "vue";

const { onDragStart } = useDragAndDrop();

const editorStore = useGeneratorEditorStore();
const { sections } = storeToRefs(editorStore);

let searchText = ref("");
</script>

<template>
  <aside class="sidebar">
    <q-input color="teal" outlined v-model="searchText" label="Suche">
      <template v-slot:append>
        <q-avatar>
          <q-icon color="primary" name="search" />
        </q-avatar>
      </template>
    </q-input>
    <q-list bordered>
      <div class="listSection" v-for="section in sections">
        <q-item-label header>{{ section.label }}</q-item-label>
        <q-item clickable v-ripple v-for="node in section.nodes">
          <q-item-section
            ><div
              :class="`vue-flow__node-${node.type}`"
              :draggable="true"
              @dragstart="onDragStart($event, node.type)"
            >
              {{ node.label }}
              <Tooltip
                :tooltip="node.tooltip"
                :target="true"
                :delay="750"
                :anchor="'center right'"
              ></Tooltip></div
          ></q-item-section>
        </q-item>

        <q-separator />
        <q-separator />
      </div>
    </q-list>
  </aside>
</template>

<style>
.sidebar {
  width: 100%;
}

.sidebar .listSection {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  word-wrap: nowrap; /* https://stackoverflow.com/questions/4652654/how-to-turn-off-word-wrapping-in-html */
  white-space: pre;
  user-select: none;
}

.sidebar .listSection .q-item__section div[class*="vue-flow__node"] {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 244, 244);
  border-radius: 25px;
  text-align: center;
  font-weight: bold;
  color: black;
  font-size: medium;
  box-shadow: 0 0 4px 1px #ccc;
  text-shadow: 1px 1px 1px rgb(207, 207, 207);
}
</style>
