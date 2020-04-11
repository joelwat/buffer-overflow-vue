<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {
  QBtn,
  QHeader,
  QLayout,
  QPageContainer,
  QToolbar,
  QToolbarTitle,
} from 'quasar';

export default {
  name: 'MainLayout',

  components: {
    QBtn,
    QHeader,
    QLayout,
    QPageContainer,
    QToolbar,
    QToolbarTitle,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
