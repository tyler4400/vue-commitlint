<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import "./test";
export default {
  created() {
    // eslint-disable-next-line no-unused-vars
    var str = "Hello World"; // {#} -e
    str = "Goodbye World"; // {#}
    // equals: console.log(str)
  },
  mounted() {
    this.testFunc(1, "Hello"); // {#} -stop -time
    // equals: const result = this.testFunc(1, 'Hello'); console.log(result)
    this.testFunc("Hello", "World"); // {#} -sign
    this.testFunc("Hello", "World"); // {#} -count
    this.testFunc("Hello", "World"); // {#} -time -stop -profile
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    testFunc(p1, p2) {
      // {#} -i -t TestFunc
    }
  }
};
</script>
