<script>
export default {
  data() {
    return {
      gridItems: [
        { title: "Card 1", description: "Description for Card 1" },
        { title: "Card 2", description: "Description for Card 2" },
        { title: "Card 3", description: "Description for Card 3" },
        { title: "Card 4", description: "Description for Card 4" },
        { title: "Card 5", description: "Description for Card 5" },
        { title: "Card 6", description: "Description for Card 6" },
        { title: "Card 7", description: "Description for Card 7" },
        { title: "Card 8", description: "Description for Card 8" },
        { title: "Card 9", description: "Description for Card 9" },
        { title: "Card 10", description: "Description for Card 10" },
        { title: "Card 11", description: "Description for Card 11" },
        { title: "Card 12", description: "Description for Card 12" },
        { title: "Card 13", description: "Description for Card 13" },
        { title: "Card 14", description: "Description for Card 14" },
        { title: "Card 15", description: "Description for Card 15" },
        { title: "Card 16", description: "Description for Card 16" },
        { title: "Card 17", description: "Description for Card 17" },
        { title: "Card 18", description: "Description for Card 18" },
        { title: "Card 19", description: "Description for Card 19" },
        { title: "Card 20", description: "Description for Card 20" },
      ],
    };
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, index) in gridItems"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="memory-card">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.memory-card {
  background-color: #55cdfd;
  /* Set a fixed aspect ratio */
}
</style>
