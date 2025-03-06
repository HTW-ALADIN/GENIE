<script setup></script>

<template>
  <div class="debuggingControls">
    <q-btn :icon="'play_arrow'"></q-btn>
    <q-btn :icon="'stop'"></q-btn>
    <q-btn :icon="'skip_previous'"></q-btn>
    <q-btn :icon="'skip_next'"></q-btn>
    <q-btn :icon="'replay'"></q-btn>
  </div>
</template>

<style>
.debuggingControls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: black;
}
</style>
