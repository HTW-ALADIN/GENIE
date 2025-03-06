<template>
  <q-layout view="hHh lpr fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          GENIE
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/generator" label="Generator Workflow" />
        <q-route-tab to="/ui" label="UI Designer" />
        <q-route-tab to="/settings" label="Settings" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
