<template>
  <div>
    <DashboardQueueTable />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DashboardQueueTable from '@/components/DashboardQueueTable.vue';

export default Vue.extend({
  name: 'Dashboard',
  components: {
    DashboardQueueTable,
  },
});
</script>
