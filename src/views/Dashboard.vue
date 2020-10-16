<template>
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <DashboardQueueTable />
        </v-flex>
        <v-flex xs12 lg6>
          <DashboardQueueGraph />
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import DashboardQueueTable from '@/components/DashboardQueueTable.vue';
import DashboardQueueGraph from '@/components/DashboardQueueGraph.vue';

export default Vue.extend({
  name: 'Dashboard',
  components: {
    DashboardQueueTable,
    DashboardQueueGraph,
  },
});
</script>
