<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Footer: () => import("@/components/Footer/Footer"),
  },
  data: () => ({
    //
  }),
};
</script>
<style>
@import "./styles/global.css";
</style>
