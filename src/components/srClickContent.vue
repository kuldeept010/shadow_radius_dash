<script>
import { h } from "vue";

export default {
  name: "ClickContent",
  setup(props, { slots }) {
    return () =>
      h(
        "div",
        {
          style: { cursor: "pointer" },
        },
        slots
      );
  },
};
</script>
