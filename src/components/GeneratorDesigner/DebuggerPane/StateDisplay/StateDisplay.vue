<script setup lang="ts">
import { ref } from "vue";

import CollapsibleList from "./CollapsibleList.vue";

// TODO: set proper interface/type for the stateSections
// type GeneratorParameterState = {
//   key: string;
//   value: any;
//   type: string;
// };

const stateSections = ref({
  fixedParameters: {
    label: "Statische Eingabeparameter",
    state: [
      {
        key: "LOOP",
        value: [
          {
            key: "nodes",
            value: [
              {
                key: "0",
                value: "Sequence",
                type: "string",
              },
              {
                key: "1",
                value: "Sequence",
                type: "string",
              },
              {
                key: "2",
                value: "Event",
                type: "string",
              },
              {
                key: "3",
                value: "Sequence",
                type: "string",
              },
            ],
            type: "array",
          },
          {
            key: "edges",
            value: [
              {
                key: "1",
                value: "Sequence",
                type: "string",
              },
            ],
            type: "array",
          },
        ],
        type: "object",
      },
    ],
  },
  variableParameters: {
    label: "Variable Eingabeparameter",
    state: [
      {
        key: "test",
        value: "stuff",
        type: "string",
      },
    ],
  },
  remaindingState: {
    label: "Kontext",
    state: [
      {
        key: "test",
        value: "stuff",
        type: "string",
      },
    ],
  },
});
</script>

<template>
  <q-list id="stateDisplay" bordered class="rounded-borders" v-for="stateSection in stateSections">
    <q-expansion-item
      expand-separator
      switch-toggle-side
      dense
      dense-toggle
      :label="stateSection.label"
      v-for="object in stateSection.state"
      header-class="stateDisplay-section"
      :content-inset-level="1"
    >
      <CollapsibleList :object="object" :indentation-level="1"></CollapsibleList>
    </q-expansion-item>

    <q-separator />
    <q-separator />
  </q-list>
</template>

<style>
#stateDisplay {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  background-color: black;
  /* TODO: enable and style accordingly
  overflow: scroll; */
  color: white;
  overflow: auto;
}

.stateDisplay-section .q-item__label {
  text-transform: uppercase;
  font-weight: 900;
}
</style>
