<script>
export default {
  props: {
    word: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <v-card class="memory-card">
    <v-card-title>{{ word }}</v-card-title>
  </v-card>
</template>

<style scoped lang="scss">
.memory-card {
  background-color: #55cdfd;
}
</style>
