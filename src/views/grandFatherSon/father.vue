<template>
  <div>
    <son v-on="$listeners" v-bind="$attrs"></son>
    props:{{ bar }}
  </div>
</template>

<script>
import son from "./son";
export default {
  name: "father",
  props: ["bar"],
  components: {
    son
  },
  mounted() {
    console.log(this.$scopedSlots);
    console.log(this.$listeners);
    console.log(this.$attrs);
  }
};
</script>

<style lang="scss" scoped></style>
