<template>
  <div>
    <enhanced-comp @customize-click="handleCustClick" :test="100" />
  </div>
</template>

<script>
import baseComponent from "./components/base-component";
import Hoc from "@/views/HOC/components/Hoc";
const enhancedComp = Hoc(baseComponent);
export default {
  name: "index",
  components: {
    enhancedComp
  },
  methods: {
    handleCustClick() {
      console.log("handleCustClick");
    }
  },
  mounted() {
    console.log(
      "想要查看一个组件的模板被编译后的渲染函数很简单，只需要访问 this.$options.render 即可"
    );
    console.log(this.$options.render);
  }
};
</script>

<style lang="scss" scoped></style>
