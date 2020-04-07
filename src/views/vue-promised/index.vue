<template>
  <Promised :promise="usersPromise">
    <template v-slot:pending>
      <p>Loading...</p>
    </template>
    <template v-slot="data">
      <ul>
        <li v-for="(user, index) in data.data" :key="index">{{ user.name }}</li>
      </ul>
    </template>
    <template v-slot:rejected="error">
      <p>Error: {{ error.message }}</p>
    </template>
  </Promised>
</template>

<script>
/**
 * 开源库 vue-promised的使用
 * https://github.com/posva/vue-promised
 * Created by Tyler on 2020/4/7 12:07.
 */
import { Promised } from "vue-promised";
import axios from "axios";
export default {
  name: "index",
  components: {
    Promised
  },
  data: () => ({
    usersPromise: null
  }),
  created() {
    this.usersPromise = axios.post("http://localhost:3000/vue-promised");
  }
};
</script>

<style lang="scss" scoped></style>
