<script lang="ts" setup>
import { ref } from "vue";

type Props = { object: any; indentationLevel: number };

const props = defineProps<Props>();

const indentationWidth = 25;

const isOpen = ref(false);

const isNestedObject = (objectType: string) => {
  return objectType === "object" || objectType === "array";
};
</script>

<template>
  <div class="keyValuePair">
    <q-expansion-item
      v-if="isNestedObject(props.object.type)"
      expand-separator
      switch-toggle-side
      dense
      dense-toggle
      :content-inset-level="1"
      v-model="isOpen"
    >
      <template v-slot:header>
        <q-item-section class="key" avatar> {{ props.object.key }} </q-item-section>
        <q-item-section avatar> : </q-item-section>
        <q-item-section class="type" avatar> {{ props.object.type }} </q-item-section>
        <q-item-section avatar v-if="!isOpen"> = </q-item-section>
        <q-item-section avatar v-if="!isOpen"> {...} </q-item-section>
      </template>
      <collapsible-list
        v-for="nestedObject of props.object.value"
        :object="nestedObject"
        :indentationLevel="props.indentationLevel"
      />
    </q-expansion-item>
    <q-item
      v-else
      clickable
      v-ripple
      :style="`margin-left: ${indentationWidth * indentationLevel}px;`"
    >
      <q-item-section class="key" avatar> {{ props.object.key }} </q-item-section>
      <q-item-section avatar> : </q-item-section>
      <q-item-section class="type" avatar> {{ props.object.type }} </q-item-section>
      <q-item-section avatar> = </q-item-section>
      <q-item-section avatar>
        <q-input v-model="props.object.value" standout="bg-teal text-white" />
      </q-item-section>
    </q-item>
  </div>
</template>

<style>
.keyValuePair input {
  color: white;
  width: 50px;
}

.key {
  color: rgb(400, 10, 200) !important;
}

.type {
  color: rgb(150, 95, 231) !important;
}
</style>
