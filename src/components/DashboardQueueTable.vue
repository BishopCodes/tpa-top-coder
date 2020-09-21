<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="10"
    class="elevation-1"
    >
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DashboardQueueTable',
  data: () => ({
    headers: [
      {
        text: 'Queue Name',
        align: 'start',
        sortable: false,
        value: 'queueName',
      },
      {
        text: 'Queue Description',
        align: 'start',
        sortable: false,
        value: 'queueDescription',
      },
      {
        text: 'In Queue',
        align: 'start',
        sortable: true,
        value: 'queueCount',
      },
    ],
    items: [
      {
        queueName: 'OCR Recoginition',
        queueDescription: 'Entries currently being recognized before further evaluation.',
        queueCount: '59',
      },
    ],
  }),
});
</script>
