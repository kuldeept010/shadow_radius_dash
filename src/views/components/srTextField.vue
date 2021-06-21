<template>
  <sr-text-field
    :label="label"
    :value="inputValue"
    :placeholder="placeholder"
    :icon="icon"
  />
</template>

<script>
import srTextField from "@/components/srTextField";
export default {
  components: {
    srTextField,
  },
  data: () => ({
    inputValue: "",
    label: "Name",
    placeholder: "Enter your name",
    icon: "iconly-Search",
  }),
};
</script>
