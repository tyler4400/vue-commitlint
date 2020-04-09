<template>
  <div @click="handleClick">{{ $attrs }}</div>
</template>

<script>
export default {
  name: "son",
  methods: {
    handleClick() {
      this.$emit("getThings", "老爹在哪里？");
    }
  }
};
</script>

<style lang="scss" scoped></style>
