<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <p><span class="log">2019/11/28 下午3:50:39</span></p>
    <p><span class="info">2019/11/28 下午3:50:39</span></p>
    <p><span class="warn">2019/11/28 下午3:50:39</span></p>
    <p><span class="error">2019/11/28 下午3:50:39</span></p>
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // },
  created() {
    console.log(this.$_.isEmpty() ? "lodash is ok" : "lodash not ok");
    console.info("222");
    console.warn(12, 44, "wada", { a: 3 });
    console.error(new Error("not good"));
  }
};
</script>
<style>
.log {
  color: #ffffff;
  padding: 4px;
  border-radius: 5px;
  background-color: rgb(44, 175, 72);
}
.info {
  color: #f5f0f0;
  padding: 4px;
  border-radius: 5px;
  background-color: rgba(223, 39, 245, 0.92);
}
.warn {
  color: #f5f0f0;
  padding: 4px;
  border-radius: 5px;
  background-color: rgba(56, 150, 183);
}
.error {
  color: #ffffff;
  padding: 4px;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
}
</style>
