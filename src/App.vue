<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
import { routes } from "./router";
export default {
  data() {
    return {
      routes
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: left;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
