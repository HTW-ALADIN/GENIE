<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref, reactive } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";

const $q = useQuasar();
const accept = ref(false);

const gesInputParameter = reactive({
  name: { content: "EPK-Generator", label: "Generatorname" },
  type: { content: "GRS", label: "Generatortyp" },
});

const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
};

const onReset = () => {
  for (let key in gesInputParameter) {
    gesInputParameter.key.value = null;
  }

  accept.value = false;
};

const vueFlowLeft = "ruleEditorLeftSide";
const vueFlowRight = "ruleEditorRightSide";
const vueFlowLeftState = useVueFlow({ id: vueFlowLeft });
const vueFlowRightState = useVueFlow({ id: vueFlowRight });
const leftNodes = ref([
  {
    id: "1",
    label: "Sequence",
    data: { label: "Sequence" },
    position: { x: 50, y: 50 },
  },
]);
const rightNodes = ref([
  {
    id: "1",
    label: "Sequence",
    data: { label: "Sequence" },
    position: { x: 50, y: 50 },
  },
  {
    id: "2",
    label: "OR-Gate",
    data: { label: "OR-Gate" },
    position: { x: 50, y: 100 },
  },
  {
    id: "3",
    label: "Sequence",
    data: { label: "Sequence" },
    position: { x: 25, y: 150 },
  },
  {
    id: "4",
    label: "Sequence",
    data: { label: "Sequence" },
    position: { x: 75, y: 150 },
  },
  {
    id: "5",
    label: "OR-Gate",
    data: { label: "OR-Gate" },
    position: { x: 50, y: 200 },
  },
  {
    id: "6",
    label: "Sequence",
    data: { label: "Sequence" },
    position: { x: 50, y: 250 },
  },
]);
const leftEdges = ref([]);
const rightEdges = ref([
  { id: "1-2", source: "1", target: "2", type: "smoothstep" },
  { id: "2-3", source: "2", target: "3", type: "smoothstep" },
  { id: "2-4", source: "2", target: "4", type: "smoothstep" },
  { id: "3-5", source: "3", target: "5", type: "smoothstep" },
  { id: "4-5", source: "4", target: "5", type: "smoothstep" },
  { id: "5-6", source: "5", target: "6", type: "smoothstep" },
]);
</script>

<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <q-input
      filled
      v-model="gesInputParameter.name.content"
      :label="gesInputParameter.name.label"
      lazy-rules
    />

    <q-input
      filled
      v-model="gesInputParameter.type.content"
      :label="gesInputParameter.type.label"
      lazy-rules
    />

    <div></div>

    <p class="ruleEditorHeader">Regeleditor</p>
    <div class="ruleEditor">
      <div class="leftSide">
        <VueFlow :nodes="leftNodes" :edges="leftEdges" :id="vueFlowLeft" fit-view-on-init>
        </VueFlow>
      </div>
      <div class="vl"></div>
      <div class="rightSide">
        <VueFlow :nodes="rightNodes" :edges="rightEdges" :id="vueFlowRight" fit-view-on-init>
        </VueFlow>
      </div>
    </div>

    <!-- <q-toggle v-model="accept" label="I accept the license and terms" style="color: black" /> -->

    <div>
      <q-btn label="Save" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<style>
.ruleEditorHeader {
  color: black;
}
.ruleEditor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  border: 1px solid lightgray;
  border-radius: 15px;
}

.vl {
  border-left: 6px solid green;
  height: 100%;
}

.ruleEditor .leftSide {
  padding: 5px;
  width: 50%;
  height: 100%;
}

.ruleEditor .rightSide {
  padding: 5px;
  width: 50%;
  height: 100%;
}
</style>
