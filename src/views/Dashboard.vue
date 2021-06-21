<template>
  <sr-navigation />
  <sr-container>
    <sr-column size="8">
      <sr-title>Sale</sr-title>
      <sale-chart width="400" height="400" />
    </sr-column>
    <sr-column size="4">
      <sr-title>Hello</sr-title>
    </sr-column>
  </sr-container>
</template>

<script>
import srNavigation from "@/components/srNavigation.vue";
import srContainer from "@/components/srContainer.vue";
import srColumn from "@/components/srColumn.vue";
import srTitle from "@/components/srTitle.vue";
import SaleChart from './dashboard/SaleChart.vue';

export default {
  components: {
    srNavigation,
    srContainer,
    srColumn,
    srTitle,
    SaleChart,
  },
};
</script>
