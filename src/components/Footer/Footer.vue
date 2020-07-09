<template>
  <v-footer class="justify-center" :color="color">
    <div class="text-color text-center">
      &copy; Lucas Finoti — {{ new Date().getFullYear() }}, All rights reserved
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      color: "#2a7886",
    };
  },
};
</script>

<style scoped>
.text-color {
  color: #f1f3f4;
}
</style>
