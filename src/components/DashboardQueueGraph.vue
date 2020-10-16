<template>
  <v-card
    class="mx-auto text-center"
    light
  >
    <v-sheet
      class="mx-auto"
      max-width="calc(100% - 64px)"
    >
      <v-sparkline
        :labels="labels"
        :value="values"
        color="black"
        line-width="2"
        label-size="5"
        padding="24"
        type="trend"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">
        OCR Recognition Queue
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    labels: [] as string[],
    values: [] as number[],
  }),
  created() {
    setInterval(this.getGraphData, 5000);
  },
  methods: {
    getGraphData() {
      const [, ...trimmedValues] = this.values || [];
      const newValue = Math.floor(Math.random() * (100 - 5) + 5);
      this.values = (this.values.length > 6)
        ? [...trimmedValues, newValue] : [...this.values, newValue];
      const [, ...trimmedLabels] = this.labels || [];
      const newLabel = `${new Date().toLocaleTimeString()}(${newValue})`;
      this.labels = (this.labels.length > 6)
        ? [...trimmedLabels, newLabel] : [...this.labels, newLabel];
    },
  },
});
</script>
