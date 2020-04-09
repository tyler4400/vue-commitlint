<template>
  <father @getThings="getThings" foo="foo" bar="bar"></father>
</template>

<script>
import father from "./father";
export default {
  name: "index",
  components: {
    father
  },
  methods: {
    getThings(val) {
      console.log("getThings", val);
    }
  }
};
</script>

<style lang="scss" scoped></style>
